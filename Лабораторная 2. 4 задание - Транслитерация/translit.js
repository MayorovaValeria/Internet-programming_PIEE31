 var
        rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
        eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);
		
	function transliterate(text, engToRus) 
    {
        let texttrans = '';
        
        for(let x = 0; x < text.length; x++) 
        {
            let letter = text[x]; 
            
            if (engToRus) 
            {
                let letter3 = text.slice(x, 3);
                let letter2 = text.slice(x, 2);
                let letter3Index = eng.indexOf(letter3);
                let letter2Index = eng.indexOf(letter2);
                let letterIndex = eng.indexOf(letter);
                if(letter3Index >= 0) 
                {
                    
                    texttrans += rus[letter3Index];
                }
                else if(letter2Index >= 0) 
                {
                    
                    texttrans += rus[letter2Index];
                }
                else if(letterIndex >=0) 
                {
                    
                    texttrans += rus[letterIndex];
                }
                else
                {
                    texttrans += letter;
                } 
            }
            else 
            {
               
                let letterIndex = rus.indexOf(letter);
                if(letterIndex >= 0)
                {
                    
                    texttrans += eng[letterIndex];
                }
                else
                {
                    texttrans += letter;
                }
            }
        }
        return texttrans;
    }

    function onClickButtonTrans_rus() 
    {
        
       let textrus = document.getElementById("textrus");
       let texteng = document.getElementById("texteng");
       let trans = transliterate(textrus.value, false);
       
        texteng.value = trans;
        
    }

    function onClickButtonTrans_eng() 
    {
        textrus.value = transliterate(texteng.value, true)
    }	