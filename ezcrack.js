function(context,args) { // target:#s.some.npc
        var g={},r,l
        function c() {
                r=args.target.call(g);
                l=r.split('\n').pop();
        }
        var EZ=['open','release','unlock']
        c()
        for(;;) {
                if(l=="Connection terminated.")return g
                if(l.includes('EZ_21')) {
                        for(var i=0;i<EZ.length;++i) {
                                g.ez_21=EZ[i]
                                c()
                                if(!l.includes('is not the correct'))break
                        }
                }
        }
}
