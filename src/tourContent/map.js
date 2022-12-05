export default `

<div id='map-wrapper'>
  <iframe style="width: 100%; height: 100%" src="infoPages/map.html"></iframe>
</div>

<style>

#map-wrapper{
  width:90%; 
  height:90%; 
  background:#2a4c45; 
  position:absolute; 
  margin: 5%;
}
@media (max-width: 600px) {
  #map-wrapper{
    width: 90%;
    height: 90%;
    margin: 5%;
  }
}


</style>
`;
