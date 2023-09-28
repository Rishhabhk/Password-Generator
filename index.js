let pass_len = document.getElementsByClassName("pass_len");
        let slider = document.getElementById("slider");
        let upper_case = document.getElementById("upper_case");
        let lower_case = document.getElementById("lower_case");
        let number = document.getElementById("number");
        let symbol = document.getElementById("symbol");
        let password = document.getElementById("pass");
        let generate = document.getElementById("gen_pass");
        let copy = document.getElementById("copy");
        let sym = '!@#$%^&*{}[];/`';
        let pw = "";
        //password length
        pass_len[0].innerHTML = "Password length: " + slider.value;
        slider.addEventListener('input',() =>{
            pass_len[0].innerHTML = "Password length: " + slider.value;
        })

        //initially
        // upper_case.checked = true;

        //random int gen
        function random_int(min,max){
            return Math.floor(Math.random()*(max-min)) + min
        }

        // uppercase gen
        function uc_gen(){
            return String.fromCharCode(random_int(65,91));
        }
        //lowercase gen
        function lc_gen(){
            return String.fromCharCode(random_int(97,123));
        }
        // symbol gen
        function sy_gen(){
            return sym[random_int(0,sym.length)];
        }
        //number gen
        function nu_gen(){
            return random_int(0,9);
        }


        // generate password
        generate.addEventListener('click',()=>{
            pw = "";
            let arr = [];
            if(upper_case.checked){
                arr.push(uc_gen());
            }
            if(lower_case.checked){
                arr.push(lc_gen());
            }
            if(symbol.checked){
                arr.push(sy_gen());
            }
            if(number.checked){
                arr.push(nu_gen());
            }
            for(let i=0;i<arr.length;i++){
                pw += arr[i];
            }

            let arr2 = [];
            for(let i=0;i<slider.value - arr.length;i++){
                if(upper_case.checked){
                    arr2.push(uc_gen());
                }
                if(lower_case.checked){
                    arr2.push(lc_gen());
                }
                if(symbol.checked){
                    arr2.push(sy_gen());
                }
                if(number.checked){
                    arr2.push(nu_gen());
                }
                pw += arr2[i];
            }
            // shuffle
            for(let i=0;i<pw.length;i++){
                let j = random_int(0,pw.length);
                let temp = pw[i];
                pw[i] = pw[j];
                pw[j] = temp; 
            }

            let list = [];
            for(let i=0;i<pw.length;i++){
                list.push(pw[i]);
            }

            for(let i=0;i<list.length;i++){
                let j = random_int(0,list.length);
                let temp = list[i];
                list[i] =list[j];
                list[j] = temp; 
            }

            //final
            let z = "";
            for(let i=0;i<list.length;i++){
                z += list[i];
            }
            
            password.innerHTML = z;
            
       })

       //copy
       copy.addEventListener('click',async () => {
        try{
            await navigator.clipboard.writeText(password.innerHTML);
            alert("copied to clipboard");
        }
        catch(e){
            alert("failed to copy");
        }
       })
