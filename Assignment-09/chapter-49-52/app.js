//task01
var output;
function task01() {
    var name = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementsByName('gender');
    var genderVal;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            genderVal = gender[i].value;
    }

    output = "<h6>Information of Student</h6><br/> <p>Student: " + name + "</p> <p>Student Last Name: " + lname + "</p> <p>Student Age: " + age + "</p> <p>Student Gender: " + genderVal + "</p>"

    document.getElementById('info').innerHTML = output;
}

function task02() {
    document.getElementById('read').style.height = '300px';
}

//task03
var crudApp = new function() {
    this.recordsHeader = ['Name','Last Name','Age','Gender'];
    this.records = [];

    this.createTable = function(){
        var table = document.createElement('table');
        table.setAttribute('id','userRecords');
        table.setAttribute('class','table');
        var tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).
    
        for (var h = 0; h < this.recordsHeader.length; h++) {
            // ADD TABLE HEADER.
            var th = document.createElement('th');
            th.setAttribute('class','th')
            th.innerHTML = this.recordsHeader[h];
            tr.appendChild(th);
        }

        for (var i = 0; i < this.records.length; i++) {
            tr = table.insertRow(-1);           // CREATE A NEW ROW.
            for (var j = 0; j < this.recordsHeader.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.setAttribute('class','td')
                tabCell.innerHTML = this.records[i][j];
            }
            this.td = document.createElement('td');
    
            // *** CANCEL OPTION.
            tr.appendChild(this.td);
            var lblCancel = document.createElement('label');
            lblCancel.innerHTML = '✖';
            lblCancel.setAttribute('onclick', 'crudApp.Cancel(this)');
            lblCancel.setAttribute('style', 'display:none;');
            lblCancel.setAttribute('title', 'Cancel');
            lblCancel.setAttribute('id', 'lbl' + i);
            this.td.appendChild(lblCancel);
    
            // *** SAVE.
            tr.appendChild(this.td);
            var btSave = document.createElement('input');
    
            btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
            btSave.setAttribute('value', 'Save');
            btSave.setAttribute('id', 'Save' + i);
            btSave.setAttribute('style', 'display:none;');
            btSave.setAttribute('onclick', 'crudApp.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btSave);
    
            // *** UPDATE.
            tr.appendChild(this.td);
            var btUpdate = document.createElement('input');
    
            btUpdate.setAttribute('type', 'button');    // SET ATTRIBUTES.
            btUpdate.setAttribute('value', 'Update');
            btUpdate.setAttribute('id', 'Edit' + i);
            btUpdate.setAttribute('style', 'background-color:#44CCEB;');
            btUpdate.setAttribute('onclick', 'crudApp.Update(this)');   // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btUpdate);
    
            // *** DELETE.
            this.td = document.createElement('th');
            tr.appendChild(this.td);
            var btDelete = document.createElement('input');
            btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
            btDelete.setAttribute('value', 'Delete');
            btDelete.setAttribute('style', 'background-color:#ED5650;');
            btDelete.setAttribute('onclick', 'crudApp.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btDelete);
        }



        
        var div = document.getElementById('post');
        div.innerHTML = '';
        div.appendChild(table);
    }

    this.add = function() {
        var sname = document.getElementById('sname').value;
        var slname = document.getElementById('slname').value;
        var sage = document.getElementById('sage').value;
        var sgender = document.getElementsByName('sgender');
        var sgenderVal;
        for (i = 0; i < sgender.length; i++) {
            if (sgender[i].checked)
                sgenderVal = sgender[i].value;
        }
    
        this.records.push([sname, slname, sage, sgenderVal]);
        this.createTable();
    }

    

        // ****** OPERATIONS START.

        // CANCEL.
        this.Cancel = function (oButton) {

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none; float:none;');

            var activeRow = oButton.parentNode.parentNode.rowIndex;

            // HIDE THE SAVE BUTTON.
            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:none;');

            // SHOW THE UPDATE BUTTON AGAIN.
            var btUpdate = document.getElementById('Edit' + (activeRow - 1));
            btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

            var tab = document.getElementById('userRecords').rows[activeRow];

            for (i = 0; i < this.recordsHeader.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                td.innerHTML = this.records[(activeRow - 1)][this.recordsHeader[i]];
            }
        }


        // EDIT DATA.
        this.Update = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('userRecords').rows[activeRow];
            for (i = 0; i < 4; i++) {
                
                var td = tab.getElementsByTagName("td")[i];
                var ele = document.createElement('input');      // TEXTBOX.
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                
            }

            var lblCancel = document.getElementById('lbl' + (activeRow - 1));
            lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none;');
        };


        // DELETE DATA.
        this.Delete = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            this.records.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
            this.createTable();                         // REFRESH THE TABLE.
        };

        // SAVE DATA.
        this.Save = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            console.log(activeRow);
            var tab = document.getElementById('userRecords').rows[activeRow];
            // UPDATE ARRAY WITH VALUES.
            
            for (i = 0; i < this.recordsHeader.length; i++) {
                var td = tab.getElementsByTagName("td");
                // console.log(td.childNodes[i].value);
                // this.records[(activeRow - 1)][i] = td.childNodes[i].value; 
                for(j = 0; j < this.td.length -1; j++){
                    var cell = td[j]
                    this.records[(activeRow - 1)][j] = cell.childNodes[i].value;      // SAVE THE VALUE.
                    console.log(cell.childNodes[i]);
                }
                
                
            }
            this.createTable();     // REFRESH THE TABLE.
        }
    


    

}   
