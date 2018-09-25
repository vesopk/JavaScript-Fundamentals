function PrintXML(arr)
{
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?> \n";
    xml += "<quiz> \n";

    for(let i = 0; i < arr.length; i += 2){

        let question = arr[i];
        let answer = arr[i+1];

        let xmlQuestion = PrepareXMLQuestion(question);
        let xmlAnswer = PrepareXMLAnswer(answer);

        xml += xmlQuestion;
        xml += xmlAnswer;

    }
    xml += "</quiz>";
    
    function PrepareXMLQuestion(question){
        let xmlQuestion = "<question>\n";
        xmlQuestion += question;
        xmlQuestion += "\n</question>\n";

        return xmlQuestion;
    }
    function PrepareXMLAnswer(answer){
        let xmlAnswer = "<answer>\n";
        xmlAnswer += answer;
        xmlAnswer += "\n</answer>\n";

        return xmlAnswer;
    }

    
    console.log(xml);
}

PrintXML(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]
);