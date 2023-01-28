var score = 0
function load()
{
    document.getElementById("question1_div").style.display = "block";
    document.getElementById("question2_div").style.display = "none";
    document.getElementById("question3_div").style.display = "none";
    document.getElementById("question4_div").style.display = "none";
    document.getElementById("question5_div").style.display = "none";
    document.getElementById("question6_div").style.display = "none";
    document.getElementById("question7_div").style.display = "none";
    document.getElementById("question8_div").style.display = "none";
    document.getElementById("final_text").style.display = "none";
    document.getElementById("restart").style.display = "none";
}

function check_question1()
{
    if (document.getElementById("question1").value == "709")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question1_div").style.display = "none";
        document.getElementById("question2_div").style.display = "block";
    }
    else
    {
        document.getElementById("question1_div").style.display = "none";
        document.getElementById("question2_div").style.display = "block";
    }
}
function check_question2()
{
    if (document.getElementById("question2").value == "0.02154")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question2_div").style.display = "none";
        document.getElementById("question3_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question2_div").style.display = "none";
        document.getElementById("question3_div").style.display = "block";
    }
}
function check_question3()
{
    if (document.getElementById("question3").value == "4.76")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question3_div").style.display = "none";
        document.getElementById("question4_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question3_div").style.display = "none";
        document.getElementById("question4_div").style.display = "block";
    }
}
function check_question4()
{
    if (document.getElementById("question4").value == "4500" || document.getElementById("question4").value == "4,500")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question4_div").style.display = "none";
        document.getElementById("question5_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question4_div").style.display = "none";
        document.getElementById("question5_div").style.display = "block";
    }
}
function check_question5()
{
    if (document.getElementById("question5").value == "70")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question5_div").style.display = "none";
        document.getElementById("question6_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question5_div").style.display = "none";
        document.getElementById("question6_div").style.display = "block";
    }
}
function check_question6()
{
    if (document.getElementById("question6").value == "0.412")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question6_div").style.display = "none";
        document.getElementById("question7_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question6_div").style.display = "none";
        document.getElementById("question7_div").style.display = "block";
    }
}
function check_question7()
{
    if (document.getElementById("question7").value == "91.3")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question7_div").style.display = "none";
        document.getElementById("question8_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question7_div").style.display = "none";
        document.getElementById("question8_div").style.display = "block";
    }
}
function check_question8()
{
    if (document.getElementById("question8").value == "17230" || document.getElementById("question7").value == "17,230")
    {
        score += 1
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question8_div").style.display = "none";
        document.getElementById("question9_div").style.display = "block";
    }
    else
    {
        document.getElementById("score_text").innerHTML = "Score: " + score;
        document.getElementById("question8_div").style.display = "none";
        document.getElementById("final_text").style.display = "block";
        document.getElementById("restart").style.display = "block";
        document.getElementById("final_text").innerHTML = "Score: " + score
        document.getElementById("score_text").style.display = "none";
    }
}