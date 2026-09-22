# Relation Typing：INSTANCE_OF / IS_A / PART_OF 基础区分已稳定

用户在第二轮纠错后完成同型练习：

- 这只金毛犬 → INSTANCE_OF → 狗
- 金毛犬 → IS_A → 狗
- 这台 MacBook Pro → INSTANCE_OF → 笔记本电脑
- 游戏本 → IS_A → 笔记本电脑
- 键盘 → PART_OF → 这台 MacBook Pro

5 项全部正确。

当前表现表明：
- 能区分“具体对象属于某类”与“某类是另一类的子类”；
- PART_OF 已较稳定；
- 已能利用“这只 / 这台 / 某一具体对象”等具体性线索识别 INSTANCE_OF，但后续仍需通过更隐蔽案例确认不是只依赖表面措辞。

下一步：
进入不带明显指示词的边界案例，继续验证 INSTANCE_OF vs IS_A；稳定后再引入 VALUE_OF / FACET_OF。
