({
	packItem : function(component, event, helper) {
		// var packed = component.get("v.item",true);
		// packed.Packed__c = true;
		component.set("v.item.Packed__c",true);
		event.getSource().set("v.disabled", true);
		// packed = event.getSource();
		// packed.set("v.disabled",true);

	}
})