M.add("uix-dropdown",function(n){function e(e,t){var s,i={parent:null,delay:80,disappearDelay:80,openClass:"dropdown--open"};t=n.merge(i,t||{}),e=n.one(e),e&&(s=t.parent?n.one(t.parent):e.ancestor(),s&&(this.timer=null,this.config=t,this.ndTrigger=e,this.ndParent=s,this.bind()))}e.prototype={bind:function(){function n(n){t.open(n)}function e(n){t.close(n)}var t=this,s=this.ndTrigger,i=this.ndParent;i.on("mouseout",e),s.on({mouseover:n,mouseout:e})},close:function(e){var t=this,s=this.config,i=this.ndParent,o=e&&e.relatedTarget;t.timer&&t.timer.cancel(),i.hasClass(s.openClass)!==!1&&(t.timer=n.later(s.disappearDelay,null,function(){o&&i.contains(o)||i.removeClass(s.openClass)}))},open:function(){var e=this,t=this.config,s=this.ndParent;e.timer&&e.timer.cancel(),s.hasClass(t.openClass)||(e.timer=n.later(t.delay,null,function(){s.addClass(t.openClass)}))}},n.namespace("mt.uix"),n.mt.uix.Dropdown=e},"1.0.0",{requires:["mt-base","node"]});