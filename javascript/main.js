<!Doctype html>
<html lang="en">
 <head>
 </head>
 <body>
   <form>
    <style>
    table,th,td{
      border:5px solid black;
      border-collapse:collapse;
    }
    td{
      padding:5px;
    }
    th{
    text-align:left;
    }
    </style>
    <center>
    <table>
    <p style="text-align:center;"><b>Login</b></p>
    <tr>
    <td><label for="phone">Phone Number:</label></td>
    <td><input type="tel" id="phone" name="phone" required></td>
    </tr>
    <tr>
    <td><label for="password">Password:</label></td>
    <td><input type="password" id="password" name="password" required></td>
    </tr>
    <tr>
    <td colspan="2"><input type="submit" value="Login"></td>
    </tr>
  </table>
    <p>New user? <a href="structure.html">structure here</a></p>
 </center>
   </form>
 </body>
</html>