<form name="calculator">
  <header>Calculator - base better suited to CSSGrid -- add your own CSS to make it pretty</header>
   <table>
      <tr>
         <td colspan="4">
            <input type="text" name="display" id="display" disabled>

         </td>
      </tr>
      <tr>
            <td><input type="button" name="one" value="1" onclick="calculator.display.value += '1'"></td>
            <td><input type="button" name="two" value="2" onclick="calculator.display.value += '2'"></td>
            <td><input type="button" name="three" value="3" onclick="calculator.display.value += '3'"></td>
            <td><input type="button" class="operator" name="plus" value="+" onclick="calculator.display.value += '+'"></td>
     </tr>
     <tr>
            <td><input type="button" name="four" value="4" onclick="calculator.display.value += '4'"></td>
            <td><input type="button" name="five" value="5" onclick="calculator.display.value += '5'"></td>
            <td><input type="button" name="six" value="6" onclick="calculator.display.value += '6'"></td>
            <td><input type="button" class="operator" name="minus" value="-" onclick="calculator.display.value += '-'"></td>
     </tr>
     <tr>
            <td><input type="button" name="seven" value="7" onclick="calculator.display.value += '7'"></td>
            <td><input type="button" name="eight" value="8" onclick="calculator.display.value += '8'"></td>
            <td><input type="button" name="nine" value="9" onclick="calculator.display.value += '9'"></td>
            <td><input type="button" class="operator" name="times" value="x" onclick="calculator.display.value += '*'"></td>
     </tr>
     <tr>
            <td><input type="button" id="clear" name="clear" value="c" onclick="calculator.display.value = ''"></td>
            <td><input type="button" name="zero" value="0" onclick="calculator.display.value += '0'"></td>
            <td><input type="button" name="doit" value="=" onclick="calculator.display.value = eval(calculator.display.value)"></td>
            <td><input type="button" class="operator" name="div" value="/" onclick="calculator.display.value += '/'"></td>

      </tr>
   </table>
</form>
<p>cihan24's mini calculator.</p>