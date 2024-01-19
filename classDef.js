
class Serv {
    constructor(address, port, logo = './logos/arma3.png') {
      this.address = address;
      this.port = port;
      this.lastMessageId = null;
      this.logo = logo;
    }
  }
  