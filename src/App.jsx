import Header from 'headerAndFooter/Header'
import Footer from 'headerAndFooter/Footer'
import MainContent from 'mainContent/MainContent'

const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/assets', createProxyMiddleware({ 
    target: 'https://subtle-dolphin-e29768.netlify.app', //original url
    changeOrigin: true, 
    secure: false,
    onProxyRes: function (proxyRes, req, res,) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*' //change the header to allow cross origin
    }
}));
app.listen(5000);

function App() {

  return (
    <>
      <Header />
      {/* <MainContent /> */}
      <Footer />
    </>
  )
}

export default App
