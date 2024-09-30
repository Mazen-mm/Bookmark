var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")
var siteArr = []
function addData() {
  var data = {
    Name : siteName.value,
    Url : siteUrl.value
  }
  siteArr.push(data)
  localStorage.setItem("siteList",JSON.stringify(siteArr))
  display()
}
function display (){
  var temp = ''
  for(var i = 0 ; i < siteArr.length ; i++){
    temp += `<tr>
    <td> ${i+1} </td>
    <td> ${siteArr[i].Name} </td>
    <td><a href="${siteArr[i].Url}" target="_blank" class="btn btn-primary">Visit</a></td>
    <td><button class="btn btn-info" onclick="deleteData(${i})">Delete</button></td>
  </tr>`
  }
  document.getElementById("bodyRow").innerHTML = temp
}
function deleteData(x){
  siteArr.splice(x,1)
  localStorage.setItem("siteList",JSON.stringify(siteArr))
  display()
}
siteName.addEventListener('change',function(){
  var regexName = /^[A-Z][a-z]{1,20}[0-9]{0,4}$/
  if(regexName.test(siteName.value) == true){
  siteName.classList.add('is-valid')
  siteName.classList.remove('is-invalid')
  }else{
  siteName.classList.add('is-invalid')
  siteName.classList.remove('is-valid')
  }
})