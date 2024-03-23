## Project Name: ChronosShare

ChronosShare "Chronos" (The Greek root for time)

### Token: Chronos

Chronos: The personification of time in Greek mythology

### Slogan

Turn Every Second into Value

### Project Concept:
The project is inspired by the movie "In Time" and Airbnb. In the world of "In Time," time itself is currency and can be traded, while Airbnb focuses on renting out unused space. We aim to create a marketplace for renting and purchasing time services, similar to trading time on Airbnb.

### Project Details:
The project involves three roles: platform operator, service provider, and service purchaser.

#### Service Provider:
* **Offer Services**
  Service providers offer their time. After registering an account, they will set up a PIN and security question through [Circle's User-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart), then can start posting services. For example, offering a day to explore Taipei's cuisine, morning time for queueing services, two days as a guide in Thailand, evening programming lessons, weekend consulting, etc., essentially selling their spare time and corresponding services.
  Once a service is established, a corresponding number of NFT tickets are created via [MintClub](https://mint.club/) to the service provider's Circle wallet (MINT NFT transactions must be completed by the seller entering a PIN).
* **Start Service**
  When the service provider begins a service, the purchaser transfers the NFT ticket to the platform, which then allows the service to commence. The service provider ends the service.
* **End Service**
  After the service ends, the purchaser submits a review and completes the service action, after which the service provider receives the NFT ticket from the platform.
* **NFT Ticket Buyback**
  Upon receiving the NFT ticket, service providers can sell the NFT ticket on the platform to receive USDC.
* **Withdraw USDC**
  Withdraw USDC to a supported chain via CCTP.

#### Service Purchaser:
* **Purchase Services**
  Service purchasers can browse services offered on the platform. After registering, they set up a PIN and security question through [Circle's User-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart), then deposit USDC into their wallet address to purchase services. The NFT is transferred to the purchaser's wallet address after purchase.
* **Start Service**
  When the service provider initiates the service, the platform displays a random code provided by the purchaser to the provider to start the service.
* **End Service**
  After the service ends, submit a review and complete the service action.
* **Secondary Market**
  Trade NFT tickets on the secondary market, with a percentage of each transaction fee going back to the service provider.
* **Withdraw USDC**
  Withdraw USDC to a supported chain via CCTP.

#### Service Platform
* **Platform Services**
  * Allows users to add, modify services, and mint NFT tickets.
  * Provides service purchasing capabilities.
  * Offers a secondary market for trading NFT tickets.
  * Provides [Circle's User-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart) wallet services.
  * Issues tokens and offers Bonding Curve exchange services.
  * Provides [Circle's Cross-Chain Transfer Protocol](https://developers.circle.com/stablecoins/docs/cctp-getting-started) for cross-chain withdrawals.


### Tokenomics:
The platform will issue its own token, based on a CHRONOS/USDC Bonding Curve token.

#### Issuance Mechanism
1. A percentage of the initial issuance is subscribed by blue-chip investors.
2. For example, if a completed service costs 100 USDT, the platform takes a 10% commission (10 USDT) to exchange for CHRONOS, then distributes CHRONOS as 3% to the service provider, 3% to the service purchaser, and 4% to the platform. This exchange mechanism issues the tokens, allowing service purchasers to use this token for discounts, while service providers and purchasers can also earn APY through staking.
#### Jury System
Purchasing and staking CHRONOS grants jury eligibility. In the event of service disputes, members can participate in adjudication and receive a percentage of the service fee as compensation.

