module.exports = (height = "4px", bgColor = "black", fillColor = "orange") => {
  return `
  <div style="height:${height};width:100%;background-color:${bgColor};position:fixed;top:2px;left:0;z-index:100;transition:0.2s;">
    <div id="readerBar" style="height:${height};width:0;background-color:${fillColor};position:fixed;top:2px;left:0;z-index:200;transition:0.2s;"></div>
  </div>
  
  <script>
    let winH = window.innerHeight;
    const content = document.querySelector('.reader-bar-start');

    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.flexGrow = "1";

    let contentH = content.offsetHeight;
    let contentS = contentH - winH;
    let readerBar = document.getElementById('readerBar');
    window.addEventListener('load', () => {
      document.addEventListener ('scroll', updateBar);
    })
    window.addEventListener('resize', redefine)
    
    function redefine() {
      winH = window.innerHeight;
      contentH = content.offsetHeight;
      contentS = contentH - winH;
      updateBar();
    }

    function updateBar() {
      const pagePos = window.scrollY; 
      const updatedBar = pagePos * 100 / contentS;
      readerBar.style.width = updatedBar + "%";
    }
  </script>
  `         
}