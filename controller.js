function main(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1600;
    canvas.height = 1200;
    
    let baseImg = new Image();
    let abtnImg = new Image();
    let bbtnImg = new Image();
    let xbtnImg = new Image();
    let ybtnImg = new Image();
    let rtImg = new Image();
    let ltImg = new Image();
    let selectImg = new Image();
    let startImg = new Image();
    let l1Img = new Image();
    let r1Img = new Image();
    let L3Img = new Image();
    let R3Img = new Image();
    let abtnImgpressed = new Image();
    let bbtnImgpressed = new Image();
    let xbtnImgpressed = new Image();
    let ybtnImgpressed = new Image();
    let l1Imgpressed = new Image();
    let r1Imgpressed = new Image();
    let rtImgpressed = new Image();
    let ltImgpressed = new Image();
    let selectImgpressed = new Image();
    let startImgpressed = new Image();
    let L3ImgPress = new Image();
    let R3ImgPress = new Image();



    baseImg.onload = function(){
        // ctx.drawImage(imgObj, xpos, ypos);
        ctx.drawImage(baseImg, 0, 200);
        console.log("Image drawn?");
    };

    ltImg.onload = function(){
        ctx.drawImage(ltImg, 262, 77);
    }

    rtImg.onload = function(){
        ctx.drawImage(rtImg, 1080, 77);
    }

    // l1Img.onload = function(){
    //     ctx.drawImage(l1Img, 227, 224);
    // }

    // r1Img.onload = function(){
    //     ctx.drawImage(r1Img, 935, 224);
    // }

    // POSITION CONFIRMED:


    // bbtnImg.onload = function(){
    //     ctx.drawImage(bbtnImg, 1169, 467);
    // }

    // xbtnImg.onload = function(){
    //     ctx.drawImage(xbtnImg, 969, 467);
    // }

    // ybtnImg.onload = function(){
    //     ctx.drawImage(ybtnImg, 1069, 370);
    // }

    baseImg.src = "images/HQ/xboxHQnojoy.png";
    // baseImg.src = "images/HQ/allbuttonsplacedHQ.png"
    ltImg.src = "images/resize/LTtiny.png";
    rtImg.src = "images/resize/RTtiny.png";
    // UNPRESSED:
    abtnImg.src = "images/HQ/abuttonhqcut.png";
    bbtnImg.src = "images/HQ/bbuttonhqcut.png";
    xbtnImg.src = "images/HQ/xbuttonhqcut.png";
    ybtnImg.src = "images/HQ/ybuttonhqcut.png";
    l1Img.src = "images/HQ/L1HQcut.png";
    r1Img.src = "images/HQ/R1HQcut.png";
    selectImg.src = "images/HQ/selectbuttonhqcut.png";
    startImg.src = "images/HQ/startbuttonhqcut.png";
    L3Img.src = "images/HQ/joystickHQcut.png";
    R3Img.src = "images/HQ/joystickHQcutCopy.png";

    // PRESSED:
    abtnImgpressed.src = "images/HQ/abuttonhqcutinvert.png";
    bbtnImgpressed.src = "images/HQ/bbuttonhqcutinvert.png";
    xbtnImgpressed.src = "images/HQ/xbuttonhqcutinvert.png";
    ybtnImgpressed.src = "images/HQ/ybuttonhqcutinvert.png";
    l1Imgpressed.src = "images/HQ/L1HQcutinvert.png";
    r1Imgpressed.src = "images/HQ/R1pressed.png";
    rtImgpressed.src = "images/resize/RTpresstiny.png";
    ltImgpressed.src = "images/resize/LTpresstiny.png";
    selectImgpressed.src = "images/HQ/selectbuttonhqcutinvert.png";
    startImgpressed.src = "images/HQ/startbuttonhqcutinvert.png";
    L3ImgPress.src = "images/HQ/joystickHQcutinvert.png"
    R3ImgPress.src = "images/HQ/joystickHQcutinvertCopy.png"
    // pressed button images change source or different canvas element?:
    function updateLoop(){
        ctx.drawImage(baseImg, 0, 200);

        const gamepads = navigator.getGamepads();
        if (!gamepads){
            return;
        }
    
        const gp = gamepads[0];
        console.log(gamepads);
        console.log(gp);
        let leftJshiftx = gp.axes[0];
        let leftJshifty = gp.axes[1];
        let rightJshiftx = gp.axes[2];
        let rightJshifty = gp.axes[3];

        if (gp.buttons[0].pressed){
            // A button
            console.log("AAAAA")
            ctx.drawImage(abtnImgpressed, 1065, 565);
        } else {
            ctx.drawImage(abtnImg, 1065, 565);
        }
        
        if (gp.buttons[1].pressed){
            // B button
            console.log("B")
            ctx.drawImage(bbtnImgpressed, 1169, 467);
        } else {
            ctx.drawImage(bbtnImg, 1169, 467);
        }
        
        if (gp.buttons[2].pressed){
            // X button
            console.log("X");
            ctx.drawImage(xbtnImgpressed, 969, 467);
        } else {
            ctx.drawImage(xbtnImg, 969, 467);
        }
        
        if (gp.buttons[3].pressed){
            // Y button
            console.log("Y")
            ctx.drawImage(ybtnImgpressed, 1069, 370);
        } else {
            ctx.drawImage(ybtnImg, 1069, 370);
        }
        
        if (gp.buttons[4].pressed){
            // L1 button
            console.log("L1");
            ctx.drawImage(l1Imgpressed, 227, 224);
        } else {
            ctx.drawImage(l1Img, 227, 224);
        }
        
        if (gp.buttons[5].pressed){
            // R1 button
            console.log("R1");
            ctx.drawImage(r1Imgpressed, 935, 224);
        } else {
            ctx.drawImage(r1Img, 935, 224);
        }
        
        if (gp.buttons[6].pressed){
            // LT button
            ctx.drawImage(ltImgpressed, 262, 77);
        } else {
            ctx.drawImage(ltImg, 262, 77);
        }
        
        if (gp.buttons[7].pressed){
            // RT button
            ctx.drawImage(rtImgpressed, 1080, 77);
        } else {
            ctx.drawImage(rtImg, 1080, 77);
        }
        
        if (gp.buttons[8].pressed){
            // Select button
            ctx.drawImage(selectImgpressed, 610, 483);
        } else {
            ctx.drawImage(selectImg, 610, 483);
        }
        
        if (gp.buttons[9].pressed){
            // Start button
            ctx.drawImage(startImgpressed, 820, 483);
        } else {
            ctx.drawImage(startImg, 820, 483);
        }
        
        if (gp.buttons[10].pressed){
            // L3 button
            // ctx.setTransform(1, leftJshifty, leftJshiftx, 1, 0, 0);
            ctx.drawImage(L3ImgPress, 299 + leftJshiftx * 80, 436 + leftJshifty * 80);
            
        } else {
            // ctx.setTransform(1, leftJshifty, leftJshiftx, 1, 0, 0);
            ctx.drawImage(L3Img, 299 + leftJshiftx * 80, 436 + leftJshifty * 80);
        }
        
        if (gp.buttons[11].pressed){
            // R3 button
            // ctx.setTransform(1, leftJshiftx, leftJshifty, 1, 0, 0);
            ctx.drawImage(R3ImgPress, 855 + rightJshiftx * 80, 657 + rightJshifty * 80);
        } else {
            // ctx.setTransform(1, leftJshiftx, leftJshifty, 1, 0, 0);
            ctx.drawImage(R3Img, 855 + rightJshiftx * 80, 657 + rightJshifty * 80);
        }
        
        if (gp.buttons[12].pressed){
            // dpadUP button
        }
        
        if (gp.buttons[13].pressed){
            // dpadDown button
        }
        
        if (gp.buttons[14].pressed){
            // dpadLeft button
        }
        
        if (gp.buttons[15].pressed){
            // dpadRight button
        }
        
        if (gp.buttons[16].pressed){
            // xbox button
        }
        
        // update joystick input...
        ctx.resetTransform();

        requestAnimationFrame(updateLoop);
    }

    function addGamepad(gamepad){
        console.log("Gamepad added!");
        console.log(gamepad);
        
        updateLoop();
    }

    window.addEventListener("gamepadconnected", (evt) => {
        addGamepad(navigator.getGamepads()[evt.gamepad.index]);
    })
}







// class Controller{
//     constructor(){
//         // ...
//         // this.baseImg = "",
//         // this.buttons = [],
//     }
//     buttonRef = {
//         // 
//     }
    
// }

// class Button{
//     constructor(label, index, image){
//         this.label = this.label,
//         this.index = this.index,
//         this.pressedImage = image,
//         this.unpressedImage,
//         this.pressed,
//     }
// }

// buttons = {
//     aButton: new button("A", Gamepad.buttons[0], "/images/Apress.png"),
//     bButton: new button("B", Gamepad.buttons[1], "/images/Bpress.png"),
//     xButton: new button("X", Gamepad.buttons[2], "/images/Xpress.png"),
//     yButton: new button("Y", Gamepad.buttons[3], "/images/Ypress.png"),
//     L1button: new button("L1", Gamepad.buttons[4], "/images/L1press.png"),
//     R1button: new button("R1", Gamepad.buttons[5], "/images/R1press.png"),
//     LTrigger: new button("LT", Gamepad.buttons[6], "/images/LTpress.png"),
//     RTrigger: new button("RT", Gamepad.buttons[7], "/images/RTpress.png"),
//     select: new button("Select", Gamepad.buttons[8], "/images/Selectpress.png"),
//     start: new button("Start", Gamepad.buttons[9], "/images/Startpress.png"),
//     L3: new button("L3", Gamepad.buttons[10], "/images/L3press.png"),
//     R3: new button("R3", Gamepad.buttons[11], "/images/R3press.png"),
//     dpadUp: new button("dpadUp", Gamepad.buttons[12], "/images/dpadup.png"),
//     dpadDown: new button("dpadDown", Gamepad.buttons[13], "/images/dpadDown.png"),
//     dpadLeft: new button("dpadLeft", Gamepad.buttons[13], "/images/dpadLeft.png"),
//     dpadRight: new button("dpadRight", Gamepad.buttons[13], "/images/dpadRight.png"),
// }

//     xboxmapping: {
//         "A": 0,
//         "B": 1,
//         "X": 2,
//         "Y": 3,
//         "L1": 4,
//         "R1": 5,
//         "LT": 6,
//         "RT": 7,
//         "Select": 8,
//         "Start": 9,
//         "L3": 10,
//         "R3": 11,
//         "dpadUp": 12,
//         "dpadDown": 13,
//         "dpadLeft": 14,
//         "dpadRight": 15,
//         "XboxBtn": 16
//     }