<?php
echo'
<html>
<head>
<script>
function onDeleteAll() {
  console.log("Deleted all history");
}

function deleteAllHistory() {
  let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
}

deleteAllHistory();
</script>
</head>
<body>
<script>
location.replace("uidpro.html")
</script>
</body>

</html>'
?>
