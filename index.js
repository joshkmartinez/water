module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://github.com/kognise/water.css'
  })
  res.end()
}
