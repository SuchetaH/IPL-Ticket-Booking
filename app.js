```
function showToast(){
let toast=document.getElementById("toast");
toast.inner Text="Booking successful!;
toast.style.display="block";
setTimeout(function()
{
toast.style.display="none";
},
2000);
}

document.getElementById("bookBtn").addEventListener("click",function(){
document.get.ElementById("booking Form").scrollIntoView({
behaviour:"smooth"});
showToast();
});