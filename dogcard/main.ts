/*

*/
//% color="#C814B8" weight=25 icon="\uf186"
namespace custom {
    /*当前的方向
    */
    export enum curdir{
        //% blockId="forward" block="forward"
        forward = 0,
        //% blockId="retreat" block="retreat"
        retreat = 1,
        //% blockId="stillness" block="stillness"
        still_ness = 2,
    }
    //% blockId=init_car block="init"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function initcar(): void {
        pins.digitalWritePin(DigitalPin.P0, 1);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P16, 1);
        pins.digitalWritePin(DigitalPin.P14, 1);
    }
    //% blockId=forward_car block="forward|speed %speed|"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% speed.min=0,speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function forwardcar(speed: number): void {
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.analogWritePin(AnalogPin.P14, speed);
        pins.analogWritePin(AnalogPin.P16, speed);
        pins.digitalWritePin(DigitalPin.P13, 0);
    }
    //% blockId=retreat_car block="retreat|speed %speed|"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% speed.min=0,speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function retreatcar(speed: number): void {
        pins.analogWritePin(AnalogPin.P15, speed);
        pins.digitalWritePin(DigitalPin.P14, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        pins.analogWritePin(AnalogPin.P13, speed);
    }
    //% blockId=leftturn_car block="leftturn|lastdir %lastdir|speed %speed|"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% speed.min=0,speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function leftturncar(lastdir: curdir,speed: number): void {
        switch(lastdir){
            case curdir.forward:{
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.analogWritePin(AnalogPin.P14, speed);
                basic.pause(10);
                pins.analogWritePin(AnalogPin.P16, speed);
                break;
            }
            case curdir.retreat:{
                pins.analogWritePin(AnalogPin.P15, speed);
                pins.digitalWritePin(DigitalPin.P13, 0);
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                basic.pause(10);
                pins.analogWritePin(AnalogPin.P13, speed);
                break;
            }
            case curdir.still_ness:{
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P13, 0);
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P14, 1);
                break;
            }
        }
    }
    //% blockId=right_car block="rightturn|lastdir %lastdir|speed %speed|"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% speed.min=0,speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function rightturncar(lastdir: curdir, speed: number): void {
        switch (lastdir) {
            case curdir.forward: {
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P13, 0);
                pins.analogWritePin(AnalogPin.P16, speed);
                pins.digitalWritePin(DigitalPin.P14, 0);
                basic.pause(10);
                pins.analogWritePin(AnalogPin.P14, speed);
                break;
            }
            case curdir.retreat: {
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.analogWritePin(AnalogPin.P13, speed);
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P14, 0);
                basic.pause(10);
                pins.analogWritePin(AnalogPin.P15, speed);
                break;
            }
            case curdir.still_ness: {
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P13, 1);
                pins.digitalWritePin(DigitalPin.P16, 1);
                pins.digitalWritePin(DigitalPin.P14, 0);
                break;
            }
        }
    }
    //% blockId=stop_car block="stop"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% speed.min=0,speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function stopcar(): void {
        pins.digitalWritePin(DigitalPin.P16, 1);
        pins.digitalWritePin(DigitalPin.P14, 1);
        pins.digitalWritePin(DigitalPin.P15, 1);
        pins.digitalWritePin(DigitalPin.P13, 1);
    }

}