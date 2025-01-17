/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

var percentage = prompt("Enter a percentage");
var numerator = percentage;
var denominator = 100;
var number = percentage / 100;
var GCD = (a, b) => b ? GCD(b, a % b) : a;
var div = GCD(numerator, denominator);
alert(percentage + "% is equal to " + number + " or " + numerator / div + "/" + denominator / div + ".");