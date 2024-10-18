import { RxAvatar } from 'react-icons/rx';
export const DOCTOR_PROFILE = [
    {
        avatar: <RxAvatar size={80} />,
        name: 'Dr. Emily Watson',
        short_desc: 'Cardiologist with 10+ years of experience in treating heart-related conditions',
        desc: 'Dr. Emily Watson is a board-certified cardiologist specializing in heart disease prevention, diagnosis, and treatment. She has successfully managed complex cases of hypertension, arrhythmia, and heart failure. Dr. Watson is known for her compassionate patient care and uses the latest diagnostic tools to ensure effective treatment.',
        language: 'English',
        education: 'MD - Cardiology, Harvard Medical School',
        fees: '1',
        hospitals: 'Mercy General Hospital, Heart Care Clinic',
    },
];
export const invoices = [
    {
        invoice: '1',
        name: 'Avery Willow',
        age: 25,
        gender: 'Male',
        paymentStatus: '🟡 Pending',
        date: '2024-10-2',
        address: '0x0F284B92d59C8b59E11409495bE0c5e7dBe0dAf9',
        diagnoses: '',
        bloodType: 'A+',
        attestationId: '',
        docId: false,
        medication: 'Dolo 650',
        dosage: '3 times a day',
        duration: '5 days',
    },
    {
        invoice: '2',
        name: 'Kai Nakamura',
        age: 35,
        gender: 'Male',
        paymentStatus: '🟢 Completed',
        date: '2024-10-07',
        address: '0x2cac89ABf06DbE5d3a059517053B7144074e1CE5',
        attestationId:
            '0x93de545a2b9d199f4026fca07be7ba8309b54157994f21a07c71ce4efa4d7fce',
        docId: false,
        zkProof: {
            leaves: [
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0x9612aa6bc7b220aadab798f256a27292d8e315b11921010badb860721621aa16',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Bob Frank',
                    salt: '0xcc2b63b6b65545630c66b55676698eaef367e66409dd7b39154ee569c38a52c6',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'hypertension',
                    salt: '0x396bcb69ab756cd34f85930da57491e9c0aea9102af8a77f0168939178c461ed',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '35',
                    salt: '0xec5835436e53c117bb92afdaca3f17049fc90340a8b1423c9b0337b9d2ad7f35',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
        diagnoses: 'Sugar',
        bloodType: 'B+',
        medication: '',
        dosage: '',
        duration: '',
    },
    {
        invoice: '3',
        name: 'River Stone',
        age: 20,
        gender: 'Male',
        paymentStatus: '🟡 Pending',
        date: '2024-10-12',
        address: '0x260f9FdfD971395634E92b3D574182befb63B33d',
        attestationId: '',
        diagnoses: '',
        bloodType: 'AB+',
        docId: true,
        medication: 'Paracetamol',
        dosage: '2 times a day',
        duration: '3 days',
        docZkProof: '',
        docAttestationId: '',
    },
    {
        invoice: '4',
        name: 'Luna Moon',
        age: 34,
        gender: 'Male',
        paymentStatus: '🟢 Completed',
        date: '2024-10-18',
        address: '0x8a052Be15eC984320Ae940CBDCCCf8f97BeF1a09',
        attestationId:
            '0x203b81b3abf10d073da53bf541f36d527e486574d42a3fc80405ca288778ec1d',

        diagnoses: 'Sugar',
        bloodType: 'B+',
        docId: true,
        medication: 'Dolo',
        dosage: '2 times a day',
        duration: '3 days',
        zkProof: {
            leaves: [
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'Tuberclauses',
                    salt: '0x21adc7e44b7dcde9ad79618795bad7e386434dc89362296c83edf106333d462a',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Steve',
                    salt: '0x5ed78c0cdde3f867064b1ebe23fd1dd72075a4253640bd628329510ff7bcebe8',
                },
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0x63aa5c5fd76bd22b78685268436a954b43932ccaa4b3b07ff6f4f6cad2347699',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '55',
                    salt: '0x78dff191990c9bd6418dfeff0858a0655b2e61371fe0fb9e0d4e6c1d180aba93',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
        docZkProof: {
            leaves: [
                {
                    type: 'string',
                    name: 'duration',
                    value: '3days',
                    salt: '0x794f1d45a9697ea4408a08bca53eb56cda816eb117f3c7f708653e00374b8982',
                },
                {
                    type: 'string',
                    name: 'medication',
                    value: 'Dolo',
                    salt: '0x198f78b936591b0253bb9d0ecc3693cd08b1002ec72e06d6b1a8aa62f130c4b9',
                },
                {
                    type: 'string',
                    name: 'prescriptionId',
                    value: '7919077899',
                    salt: '0xa6ef9f50895bcdecf39cde2d5626f639beeb8dcfd463d8296b3c0916dd4bfe1d',
                },
                {
                    type: 'string',
                    name: 'dosage',
                    value: '2',
                    salt: '0xd09665c9e71bc8d0ca7afd8999b3a87869898b541a073b625d1b5432bf9e51a5',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
        docAttestationId:
            '0xf78c62a519dbdbf530041f21e32d443aa3f7269ef842965cfc0c3e1efd887ce6',
    },
    {
        invoice: '5',
        name: 'Rowan Harper',
        age: 55,
        gender: 'Male',
        paymentStatus: '🟢 Completed',
        date: '2024-10-19',
        address: '0xBb0Ad5E4AA60EE7393e7E51B5071B9b7DC5bbd44',
        docAttestationId: '',
        attestationId:
            '0x2e18018691a06926a1a2adc9d178a37f8f4e5d56bdd0e6e482632189fd645023',
        diagnoses: 'Thyphoid',
        bloodType: 'AB-',
        docId: true,
        medication: 'Zifi 650',
        dosage: '2 times a day',
        duration: '5 days',
        docZkProof: '',

        zkProof: {
            leaves: [
                {
                    type: 'uint256',
                    name: 'age',
                    value: '34',
                    salt: '0x1fcc6eba53c5e9c4e4f427f1a818cb749a0216d16a90818ffa96b1db63a02bc4',
                },
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0x2be232c659f729b6e0da2d0b268df0a7c2bee6e177dd08510138e42402550731',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Martin',
                    salt: '0xdf4e26bfba50a275f582b4dba82528428022453b6f366e40299c6a3d6ad0dd98',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'Sugar',
                    salt: '0xa90b5fa3fd187060dbb6456ab00d6b2687caa6c598a2c67a5e7f930663d676d4',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
    {
        invoice: '6',
        name: 'Aspen Birch',
        age: 66,
        gender: 'Male',
        paymentStatus: '🟢 Completed',
        date: '2024-10-20',
        address: '0xEF8817ef9D776605dD2fF7ae87c7103915F0630f',
        attestationId:
            '0xc9386f29a92566b4c863b07c3e158712bfa382b704faa223cf4a5e5ec40ba028',
        diagnoses: 'Malaria',
        docId: true,
        bloodType: 'A+',
        docZkProof: '',
        docAttestationId: '',
        medication: 'Combiflam',
        dosage: '1 times a day',
        duration: '2 days',
        zkProof: {
            leaves: [
                {
                    type: 'uint256',
                    name: 'age',
                    value: '66',
                    salt: '0xda1993e6ef39d10044f825d1aab3a7674a84b3a2e4ace04643e5d0563dbcd8af',
                },
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0x52f18761c17577d247096f8f2bf29bfa7de2c9d29cfb5589eb42abda5bf4a24c',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Roman',
                    salt: '0xde1c2d39716264f7b7473c0356c9dac666c1d38de7d63f6cd92839343f1aab37',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'Dengue',
                    salt: '0x0b55845eff5fea0102a18bb2773f79e760769da8a90b0a0c49e0dc2700eaba8d',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
    {
        invoice: '7',
        name: 'Ember Sky',
        age: 76,
        gender: 'Male',
        docZkProof: '',
        docAttestationId: '',
        paymentStatus: '🟢 Completed',
        date: '2024-10-21',
        address: '0x8a052Be15eC984320Ae940CBDCCCf8f97BeF1a09',
        attestationId:
            '0x4e305f7bec8436efec639358b39acdccceb0d04189f541f5f9587a7f0d5add7b',
        diagnoses: 'Malaria',
        docId: true,
        bloodType: 'A+',
        medication: 'Dolo 650',
        dosage: '3 times a day',
        duration: '5 days',
        zkProof: {
            leaves: [
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0xab10ed0870ebd7efd375102eacde07a7db7758157379ef4b94812d2675b4b5f0',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Dwane',
                    salt: '0x63c7c1cd86eb3948c076817f15cc78a3067fa2d5b2c62f44f3a7663d2b8818ed',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'Malaria',
                    salt: '0xfe3ee102fc35e3596ff0dc6b1be033d3ff08e26724ee1d39d5bc9ad26c6478f0',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '76',
                    salt: '0xe821a3c7d6a71489bafeed221b68f37e8a1f30a1ca94214ffb6ac36db02a867c',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
];