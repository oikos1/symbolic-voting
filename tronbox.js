const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {

    development: {
      // For trontools/quickstart docker image
      //from : 'TJb4Gy2BotytAvW1ENBZkkMVqmwWnBtb2o',
      //privateKey : 'b13501b5aa966caaa50a9161550aea8deee5ddb4aec38e192ab48786069f7eeb',
      fullHost: 'http://192.168.0.108:' + port,
      network_id: '*',
      userFeePercentage: 100, // or consume_user_resource_percent
      feeLimit: 100000000, // or fee_limit
      originEnergyLimit: 10000000, // or origin_energy_limit
      callValue: 0, // or call_value
      network_id: "*"      
    },
    compilers: {
      solc: {
         version: '0.4.24'
      }
    }
  }
}
