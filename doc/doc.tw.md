## 專案名稱: ChronosShare

ChronosShare “Chronos”（時間的希臘詞根）

### token: Chronos

Chronos：希臘神話中時間的化身

### Slogan

Turn Every Second into Value

### 專案構想：

專案啟發於電影終點戰(In Time)和Airbnb，在終點戰的世界觀裡，時間就是貨幣是可以交易買賣的，而Airbnb則是在出租沒有用到的空間，而我們想要打造的是出租與購買的時間服務市場，像是一個交易時間的Airbnb。

### 專案內容：

專案分為三個角色，營運平台方、服務提供方與服務購買方

#### 服務提供方：

- **提供服務**
  提供服務方為提供自己的時間方，在註冊完帳號後會透過[Circle](https://www.circle.com/en/)的[ser-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart)讓使用者設定PIN碼和安全問題後，可以開始發布服務，例如:我很熟台北美食，我可以出租我一天的時間陪你吃遍台北、我早上時間可以出租給想要代排隊代買的買家、我住泰國我很熟泰國哪裡好玩，我可以出租兩天時間當作導遊導覽泰國、我很擅長寫程式我可以出租我晚上的時間教你寫程式、我是一名顧問我出租我週末的時間來協助買方...等等的需求，主要就是出售自己閒置的時間與相對應的服務。
  當服務建立後會透過[MintClub](https://mint.club/)建立相對應數量的NFT票券給到服務提供方的Circle錢包(MINT NFT交易須由賣家輸入PIN碼完成交易)。
- **開始服務**
  當要服務提供方開始啟動服務時，購買服務方會將NFT票券轉移至平台後則可以開始進行服務，在結束服務後由服務方觸發結束服務。
- **結束服務**
  結束服務後，購買方會提交評論與點選完成服務，完成服務後服務提供方會從平台方收到NFT票券。
- **NFT票券回購**
  當服務提供方收到NFT票券後，可以到平台販賣NFT票券取得USDC。
- **Withdraw USDC**
  可以透過CCTP將USDC提領到支援的鏈上。

#### 服務購買方：

- **購買服務**
  服務購買方透過平台可以瀏覽服務提供方的服務，在註冊完帳號後會透過[Circle](https://www.circle.com/en/)的[ser-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart)讓使用者設定PIN碼和安全問題後，由購買方將USDC deposit到錢包地址。
  然後購買服務，購買後會轉移NFT到購買方的錢包地址。
- **開始服務**
  當要服務提供方啟動開始服務時，平台會顯示隨機code由購買方提供給服務提供方進行服務開始程序。
- **結束服務**
  結束服務後，提交評論並且完成服務動作。
- **二級市場**
  可以到二級市場買賣NFT票券，每交易一張票券會將N%的金額回饋給服務提供方。
- **Withdraw USDC**
  可以透過CCTP將USDC提領到支援的鏈上。

#### 服務平台

- **服務提供平台**
  - 提供使用者新增、修改服務並鑄造NFT票券
  - 提供使用者購買服務
  - 提供二級市場供使用者買賣NFT票券
  - 提供[Circle](https://www.circle.com/en/)的[ser-Controlled Wallets](https://developers.circle.com/w3s/docs/user-controlled-initialization-and-wallet-creation-quickstart)的錢包服務
  - 發行代幣並且提供Bonding Curve兌換服務
  - 提供[Circle](https://www.circle.com/en/)的[Cross-Chain Transfer Protocol](https://developers.circle.com/stablecoins/docs/cctp-getting-started)跨鏈提領

### 代幣經濟學：

平台會發行自己的token，由CHRONOS/USDC 的Bonding Curve token。

#### 發行機制

1. 初始發行幾%由藍籌投資者進行認購
2. 假設一筆完成的服務是100 USDT，平台會抽10% 10USDT進行曲線換購CHRONOS，然後將CHRONOS以3%給服務提供方、3%給服務購買方、4%給平台，藉由這樣換購來發行出去，未來可以讓服務購買方透過這個token折抵金額，然後服務提供方、服務購買方也可以藉由質押領取APY。

#### 陪審團機制

透過購買CHRONOS並且質押後可以獲得陪審團資格，未來服務有爭議時，可以參與審判，在審判案件後可以領取該服務費用的幾%費用。
