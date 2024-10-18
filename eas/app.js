import dotenv from 'dotenv';
import pkg from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';
import fs from 'fs';

const { EAS, PrivateData, SchemaEncoder } = pkg;

dotenv.config();

// Initialize EAS
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);
const EASContractAddress = process.env.EAS_CONTRACT_ADDRESS;

const eas = new EAS(EASContractAddress);
eas.connect(signer);

// Create private data for medical record
const createMedicalRecord = () => {
  return [
    { type: 'string', name: 'name', value: 'Alice Johnson' },
    { type: 'uint256', name: 'age', value: 28 },
    { type: 'bool', name: 'isInsured', value: true },
    { type: 'string', name: 'diagnosis', value: 'Hypertension' }
  ];
};

const privateDataMedicalRecord = new PrivateData(createMedicalRecord());
const fullTreeMedicalRecord = privateDataMedicalRecord.getFullTree();
console.log('Medical Record Merkle Tree:', fullTreeMedicalRecord);

// Create an attestation with the Merkle root
const schemaEncoderMedicalRecord = new SchemaEncoder('bytes32 privateData');
const encodedDataMedicalRecord = schemaEncoderMedicalRecord.encodeData([{ name: 'privateData', value: fullTreeMedicalRecord.root, type: 'bytes32' }]);

// Private data schema
const schemaUIDMedicalRecord = '0x20351f973fdec1478924c89dfa533d8f872defa108d9c3c6512267d7e7e5dbc2';

const createMedicalRecordAttestation = async () => {
  const transaction = await eas.attest({
    schema: schemaUIDMedicalRecord,
    data: {
      recipient: process.env.RECIPIENT_ADDRESS,
      expirationTime: 0,
      revocable: true,
      data: encodedDataMedicalRecord
    }
  });

  const attestationId = await transaction.wait();

  console.log('New Medical Record Attestation ID:', attestationId);
  return attestationId;
};

// Generate a multi-proof for medical record
const generateProofMedicalRecord = (proofIndexes) => {
  const multiProof = privateDataMedicalRecord.generateMultiProof(proofIndexes);
  console.log('Multi-proof for selective reveal (Medical Record):', multiProof);
  return multiProof;
};

// Create private data for prescription
const createPrescription = () => {
  return [
    { type: 'string', name: 'prescriptionId', value: 'presc-001' },
    { type: 'string', name: 'medication', value: 'Lisinopril 10mg' },
    { type: 'string', name: 'dosage', value: 'Take one tablet daily' },
    { type: 'string', name: 'duration', value: '30 days' }
  ];
};

const privateDataPrescription = new PrivateData(createPrescription());
const fullTreePrescription = privateDataPrescription.getFullTree();
console.log('Prescription Merkle Tree:', fullTreePrescription);

// Create an attestation with the Merkle root and reference the medical record attestation
const schemaEncoderPrescription = new SchemaEncoder('bytes32 privateData');
const encodedDataPrescription = schemaEncoderPrescription.encodeData([{ name: 'privateData', value: fullTreePrescription.root, type: 'bytes32' }]);

// Private data schema
const schemaUIDPrescription = '0x20351f973fdec1478924c89dfa533d8f872defa108d9c3c6512267d7e7e5dbc2';

const createPrescriptionAttestation = async (refUID) => {
  const transaction = await eas.attest({
    schema: schemaUIDPrescription,
    data: {
      recipient: process.env.RECIPIENT_ADDRESS,
      expirationTime: 0,
      revocable: true,
      refUID: refUID,
      data: encodedDataPrescription
    }
  });

  const attestationId = await transaction.wait();

  console.log('New Prescription Attestation ID:', attestationId);
  return attestationId;
};

// Generate a multi-proof for prescription
const generateProofPrescription = (proofIndexes) => {
  const multiProof = privateDataPrescription.generateMultiProof(proofIndexes);
  console.log('Multi-proof for selective reveal (Prescription):', multiProof);
  return multiProof;
};

// Custom JSON replacer to handle BigInt
const jsonReplacer = (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString();
    }
    return value;
  };
  
  // Write JSON data to a file
  const writeToFile = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data, jsonReplacer, 2), 'utf-8');
  };

const main = async () => {
  // Step 1: Create Medical Record Attestation
  const medicalRecordAttestationId = await createMedicalRecordAttestation();

  // Step 2: Generate proof for all fields in the medical record
  const proofIndexesMedicalRecord = [0, 1, 2, 3]; // Indexes for name, age, isInsured, diagnosis
  const multiProofMedicalRecord = generateProofMedicalRecord(proofIndexesMedicalRecord);

  console.log('Medical Record Attestation ID:', medicalRecordAttestationId);
  console.log('Generated multi-proof (Medical Record):', multiProofMedicalRecord);

  // Write medical record attestation and proof to JSON files
  writeToFile('medicalRecordAttestation.json', { attestationId: medicalRecordAttestationId });
  writeToFile('medicalRecordProof.json', multiProofMedicalRecord);

  // Step 3: Create Prescription Attestation with reference to Medical Record
  const prescriptionAttestationId = await createPrescriptionAttestation(medicalRecordAttestationId);

  // Step 4: Generate proof for all fields in the prescription
  const proofIndexesPrescription = [0, 1, 2, 3]; // Indexes for prescriptionId, medication, dosage, duration
  const multiProofPrescription = generateProofPrescription(proofIndexesPrescription);

  console.log('Prescription Attestation ID:', prescriptionAttestationId);
  console.log('Generated multi-proof (Prescription):', multiProofPrescription);

  // Write prescription attestation and proof to JSON files
  writeToFile('prescriptionAttestation.json', { attestationId: prescriptionAttestationId });
  writeToFile('prescriptionProof.json', multiProofPrescription);

  // Share the proof with the patient for verification
  console.log('Proof can be shared for verification:', multiProofPrescription);
};

main().catch(console.error);
