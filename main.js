var images=["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://i.postimg.cc/L6HcYQM0/grand-father.png",
 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
  "https://i.postimg.cc/5ymDKL83/bro.jpg",
   "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
    var names = ["Fmaily Book","Nayan Gupta", "Dilip Gupta", "Ramesh Gupta", "Nalini Gupta", "Meena Gupta"];
    var i=0;
    function update(){
        i++;                              
        var no_of_family=5
        if(i>no_of_family){i=0;}
        var img_src=images[i];
        var fmn=names[i];
        document.getElementById("family1").src=img_src;
        document.getElementById("fmn").innerHTML=fmn;
    }