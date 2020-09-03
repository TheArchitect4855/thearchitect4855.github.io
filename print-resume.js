const printResume = () => {
    let resume = document.getElementById("resume").innerHTML;
    let fullPage = document.body.innerHTML;
    document.body.id = "resume";
    document.body.innerHTML = resume;
    window.print();
}