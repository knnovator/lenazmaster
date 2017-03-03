function Redirect()
{
top.location.replace('Timeover.html');
}
function RedirectWithDelay()
{
window.setTimeout("Redirect();", 60000);
}