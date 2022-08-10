({
	doInit : function(component, event, helper){
		//create new action
		var action = component.get("c.getItems");
		// Add callback behavior for when response is received
		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === 'SUCCESS') {
				component.set("v.items", response.getReturnValue());
			} else{
				console.log('Failed with the State ' + state);
			}
		});
		// Send action off to be executed
		$A.enqueueAction(action);
	},

	createItem : function(component, event, helper){
        
        helper.validateFields (component,component.find("name"));
        helper.validateFields (component,component.find("Price"));
        helper.validateFields (component,component.find("Quantity"));
        if(component.get("v.er") === false)
        {     
            var Item = component.get("v.newItem");            
            helper.createItem (component,Item);             
                       
        }
	},

	clickCreateItem : function(component, event, helper) {
		var validCamping = component.find('campingform').reduce(function(vakidSoFar, inputCmp){
			//error message for invalid inputs
			inputCmp.showHelpMessageIfInvalid();
			return vakidSoFar && inputCmp.get('v.validity').valid;
		}, true);

		if (validCamping) {
			var newCampingItem = component.get("v.newItem");
			var campings = component.get("v.items");
			var items = JSON.parse(JSON.stringify(newCampingItem));

			console.log("Create item: " + JSON.stringify(newCampingItem));
            //helper.createItem(component, newItem);

			campings.push(items);	

			component.set("v.items", campings);
			component.set("v.newItem", { 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
			'Price__c': 0,'Packed__c': false });
		}
	},

	createItem : function(component, event, helper){
		helper.validateFields()
	}
})