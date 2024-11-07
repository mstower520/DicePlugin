// ==UserScript==
// @name         诡秘属性生成（塔小姐版）
// @author       塔小姐
// @version      1.0.0
// @description  由塔小姐制作的琉璃诡秘规则属性生成插件
// @timestamp    2024-11-7
// @license      MIT
// @homepageURL  https://github.com/mstower520/DicePlugin/
// ==/UserScript==
if(!seal.ext.find('tower_lomcreate'))
    {
        const ext = seal.ext.new('tower_lomcreate','塔小姐','1.0.0');
        const cmdLC3 = seal.ext.newCmdItemInfo();
        cmdLC3.name = 'lom3';
        cmdLC3.help = '作成3.0规则属性';
        cmdLC3.solve = (ctx,msg,cmdArgs)=>
            {
                let val = cmdArgs.getArgN(1);
                switch(val)
                {
                    case 'help': 
                    {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    default:
                    {
                        let turn = parseInt(val);
                        if(!val) turn = 1;
                        let reply = seal.format(ctx,"为{$t玩家}生成诡秘人物属性(3.0):");
                        if(turn>10)
                            {
                                reply = "生成次数过多！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        if(turn<=0)
                            {
                                reply = "生成次数过少！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        for (let i = 0; i < turn; i++) 
                            {
                                let result = seal.format(ctx,
                                    "\n力量:{$t宿环力量=2d3} 敏捷:{$t宿环敏捷=2d3} 魅力:{$t宿环魅力=2d3} 灵感:{$t宿环灵感=2d3} 意志:{$t宿环意志=2d3} 教育:{$t宿环教育=2d3} 幸运:{$t宿环幸运=2d3}"+
                                    " 共计:{$t共计=$t宿环力量+$t宿环敏捷+$t宿环魅力+$t宿环灵感+$t宿环意志+$t宿环教育+$t宿环幸运}/{$t不含幸运=$t共计-$t宿环幸运}"
                                );
                                reply = reply + result;
                            }
                        seal.vars.strSet(ctx, "$t生成属性结果(3.0)", reply)
                        seal.replyToSender(ctx, msg, reply)
                    }
                }
                return seal.ext.newCmdExecuteResult(true);
            }
        const cmdLC4 = seal.ext.newCmdItemInfo();
        cmdLC4.name = 'lom4';
        cmdLC4.help = '作成4.0规则属性';
        cmdLC4.solve = (ctx,msg,cmdArgs)=>
            {
                let val = cmdArgs.getArgN(1);
                switch(val)
                {
                    case 'help': 
                    {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    default:
                    {
                        let turn = parseInt(val);
                        if(!val) turn = 1;
                        let reply = seal.format(ctx,"为{$t玩家}生成诡秘人物属性(4.0):");
                        if(turn>10)
                            {
                                reply = "生成次数过多！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        if(turn<=0)
                            {
                                reply = "生成次数过少！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        for (let i = 0; i < turn; i++) 
                            {
                                let result = seal.format(ctx,
                                    "\n力量:{$t宿环力量=2d3} 敏捷:{$t宿环敏捷=2d3} 魅力:{$t宿环魅力=2d3} 灵感:{$t宿环灵感=2d3} 灵性:{$t宿环灵性=2d3} 意志:{$t宿环意志=2d3} 智力:{$t宿环智力=2d3} 教育:{$t宿环教育=2d3} 幸运:{$t宿环幸运=2d3}"+
                                    " 共计:{$t共计=$t宿环力量+$t宿环敏捷+$t宿环魅力+$t宿环灵感+$t宿环灵性+$t宿环意志+$t宿环智力+$t宿环教育+$t宿环幸运}/{$t不含幸运=$t共计-$t宿环幸运}"
                                );
                                reply = reply + result;
                            }
                        seal.vars.strSet(ctx, "$t生成属性结果(4.0)", reply)
                        seal.replyToSender(ctx, msg, reply)
                    }
                }
                return seal.ext.newCmdExecuteResult(true);
            }
        const cmdLC = seal.ext.newCmdItemInfo();
        cmdLC.name = 'lom';
        cmdLC.help = '作成诡秘规则属性';
        cmdLC.solve = (ctx,msg,cmdArgs)=>
            {
                let val = cmdArgs.getArgN(1);
                switch(val)
                {
                    case 'help': 
                    {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    default:
                    {
                        let turn = parseInt(val);
                        if(!val) turn = 1;
                        let reply = seal.format(ctx,"为{$t玩家}生成诡秘人物属性(4.0):");
                        if(turn>10)
                            {
                                reply = "生成次数过多！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        if(turn<=0)
                            {
                                reply = "生成次数过少！请输入1-10之间的数字！";
                                seal.replyToSender(ctx, msg, reply)
                                return seal.ext.newCmdExecuteResult(true);
                            }
                        for (let i = 0; i < turn; i++) 
                            {
                                let result = seal.format(ctx,
                                    "\n力量:{$t宿环力量=2d3} 敏捷:{$t宿环敏捷=2d3} 魅力:{$t宿环魅力=2d3} 灵感:{$t宿环灵感=2d3} 灵性:{$t宿环灵性=2d3} 意志:{$t宿环意志=2d3} 智力:{$t宿环智力=2d3} 教育:{$t宿环教育=2d3} 幸运:{$t宿环幸运=2d3}"+
                                    " 共计:{$t共计=$t宿环力量+$t宿环敏捷+$t宿环魅力+$t宿环灵感+$t宿环灵性+$t宿环意志+$t宿环智力+$t宿环教育+$t宿环幸运}/{$t不含幸运=$t共计-$t宿环幸运}"
                                );
                                reply = reply + result;
                            }
                        seal.vars.strSet(ctx, "$t生成属性结果(4.0)", reply)
                        seal.replyToSender(ctx, msg, reply)
                    }
                }
                return seal.ext.newCmdExecuteResult(true);
            }
        ext.cmdMap['lom'] = cmdLC;
        ext.cmdMap['lom3'] = cmdLC3;
        ext.cmdMap['lom4'] = cmdLC4;
        seal.ext.register(ext);
    }