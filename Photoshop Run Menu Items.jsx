// finding menuID

// install ScriptingListener Plugin
// https://helpx.adobe.com/photoshop/kb/downloadable-plugins-and-content.html

// restart PS

// open actions panel
// press record in dummy action
// "Insert Menu Item..."

// open ~/Desktop/ScriptingListenerJS.log
// find the stringIDToTypeID( "Your Action" );
var idbrowseScripts = stringIDToTypeID( "browseScripts" );

app.runMenuItem(idbrowseScripts);