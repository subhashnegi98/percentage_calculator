const calcy = () => {
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third').value;
    let fourth = document.getElementById('fourth').value;
    let totalPercentage = "";
    let perc = "";
    first = (first*25)/100;
    second = (second*50)/100;
    third = (third*75)/100;
    fourth = (fourth*100)/100;
    totalPercentage = first + second + third + fourth;
    perc = (totalPercentage *100) / 5000;
    document.getElementById('showData').innerHTML = `Your percentage is ${perc}%.`
}