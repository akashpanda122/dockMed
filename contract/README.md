# **CCIPMutihop-router**

Welcome to the **CCIP-router** repository. This project demonstrates the implementation of Chainlink's Cross-Chain Interoperability Protocol (CCIP) for executing multi-hop transactions across various testnets. The primary focus is on **DockMed** multihop functionality and its evolution into a more advanced approach with **CCIPCrossChainHop**.

---

## **DockMed Multihop First Hop**

The **DockMed** multihop functionality allows cross-chain transactions starting with a first hop. Below is an example of a transaction on the CCIP network:

---

## **Contract Evolution: docMed to CCIPCrossChainHop**

### **DockMed Cross-Chain Hop Contract**

The **DockMed** contract was the initial implementation designed for cross-chain transactions requiring up to one intermediate hop between the source and destination chains. This contract efficiently handles scenarios where a message or asset needs to pass through an intermediate blockchain before reaching its final destination.

#### **Key Features of DockMed:**

- **Simple Multi-Hop Handling**: The contract is built to handle a single intermediate hop, making it suitable for scenarios where the transaction only requires one intermediary blockchain before reaching the final destination.

- **Gas Limit Management**: The contract allows for specifying gas limits for both the initial hop and the intermediate hop, ensuring sufficient resources are allocated for each transaction.

- **Minimal Complexity**: By focusing on a single hop, the contract is optimized for simplicity and ease of use in cases where complex multi-hop transactions are not required.

### **Evolution to CCIPCrossChainHop**

As the need for more complex cross-chain transactions grew, the **DockMed** approach was extended and evolved into the **CCIPCrossChainHop** contract. This new contract supports transactions that require multiple hops across an arbitrary number of blockchains, making it far more versatile and capable of handling complex scenarios where a message or asset must traverse multiple blockchains before reaching its final destination.

#### **Key Features of CCIPCrossChainHop:**

- **Dynamic Multi-Hop Capability**: The contract can handle multiple hops, making it suitable for transactions that need to traverse several blockchains before reaching their destination.

- **Scalability**: The design allows for scaling to support an arbitrary number of chains, making it a robust solution for more complex cross-chain operations.

- **Extended Gas Management**: Similar to DockMed, this contract manages gas limits for each hop, but it extends this capability to handle multiple hops, ensuring that each step of the transaction is adequately funded.

- **Versatile Use Cases**: The contract is designed to be adaptable to various scenarios, from simple one-hop transactions to complex multi-hop transactions involving multiple intermediary blockchains.