// UX Guidelines — chrome translations (loaded only when ux-lang is not 'en').
// Card body content remains English in this pass; titles, taglines, subtitles,
// menus, section labels, and meta labels are localized.
(() => {
  const CHROME = {
    fr: {
      "The Law": "La loi", "The Model": "Le modèle", "The Effect": "L’effet", "The Threshold": "Le seuil", "The Research": "La recherche", "The Principle": "Le principe", "The Principles": "Les principes", "The Paradox": "Le paradoxe", "The Heuristics": "Les heuristiques", "The Guidelines": "Les directives", "Settings": "Réglages", "Theme": "Thème", "Language": "Langue", "Font Size": "Taille du texte", "Save": "Enregistrer", "Cancel": "Annuler", "Light": "Clair", "Dark": "Sombre", "Blue": "Bleu", "Related": "Voir aussi", "Related": "Verwandt", "Related": "Relacionado", "Related": "関連", "Related": "相关", "Sister Sites": "Sites associés", "Settings": "Einstellungen", "Theme": "Design", "Language": "Sprache", "Font Size": "Schriftgröße", "Save": "Speichern", "Cancel": "Abbrechen", "Light": "Hell", "Dark": "Dunkel", "Blue": "Blau", "Sister Sites": "Schwesterseiten", "Settings": "Ajustes", "Theme": "Tema", "Language": "Idioma", "Font Size": "Tamaño de letra", "Save": "Guardar", "Cancel": "Cancelar", "Light": "Claro", "Dark": "Oscuro", "Blue": "Azul", "Sister Sites": "Sitios hermanos", "Settings": "設定", "Theme": "テーマ", "Language": "言語", "Font Size": "文字サイズ", "Save": "保存", "Cancel": "キャンセル", "Light": "ライト", "Dark": "ダーク", "Beige": "ベージュ", "Blue": "ブルー", "Sister Sites": "姉妹サイト", "Settings": "设置", "Theme": "主题", "Language": "语言", "Font Size": "字号", "Save": "保存", "Cancel": "取消", "Light": "浅色", "Dark": "深色", "Beige": "米色", "Blue": "蓝色", "Sister Sites": "姊妹站点", "Recently viewed": "Vus récemment", "Bookmarked": "Favoris", "No bookmarks yet": "Aucun favori pour l’instant", "Copy link": "Copier le lien", "Copied": "Copié", "Email": "E-mail", "Search": "Rechercher", "Site": "Site", "Navigate": "Naviguer", "Home": "Accueil", "About": "À propos", "Glossary": "Glossaire", "People": "Personnalités", "Site Map": "Plan du site",
      "Start Here": "Commencez Ici", "Lay Out The Page": "Composer La Page", "Present And Explain": "Présenter Et Expliquer", "Structure The Choices": "Structurer Les Choix", "Design Actions And Controls": "Concevoir Actions Et Contrôles", "Keep Them Coming Back": "Donner Envie De Revenir", "Build The System": "Construire Le Système", "Follow The Rulebooks": "Suivre Les Référentiels", "Also on the site": "Aussi sur le site", "Expand all": "Tout déplier", "Collapse all": "Tout replier", "Task Type": "Type De Tâche", "Page Type": "Type De Page", "Landing Pages": "Pages D'Accueil", "Forms": "Formulaires", "Tables And Lists": "Tableaux Et Listes", "Detail Pages": "Pages De Détail", "Dashboards": "Tableaux De Bord", "Navigation And Menus": "Navigation Et Menus", "Flows And Checkout": "Parcours Et Paiement", "Every Page": "Toutes Les Pages", "Copy SVG": "Copier le SVG", "Conversational Pages And Side Panels": "Pages Conversationnelles Et Panneaux Latéraux", "The rules that apply to every screen.": "Les règles qui s'appliquent à chaque écran.", "First impressions, trust, and the pitch.": "Première impression, confiance et promesse.", "Asking for input without losing people.": "Demander des informations sans perdre l'utilisateur.", "Scanning, comparing, and finding the row.": "Parcourir, comparer et trouver la ligne.", "One thing, fully explained.": "Une seule chose, pleinement expliquée.", "Status at a glance, honestly measured.": "L'état en un coup d'œil, mesuré honnêtement.", "Getting around without getting lost.": "Se déplacer sans se perdre.", "Multi-step journeys that get finished.": "Des parcours en plusieurs étapes menés à terme.", "Chat interfaces and AI copilots.": "Interfaces de chat et copilotes IA.", "Where the eye goes and why.": "Où va le regard, et pourquoi.", "Making information effortless to absorb.": "Rendre l'information facile à absorber.", "Shaping decisions people can actually make.": "Façonner des décisions vraiment prenables.", "Targets, feedback, and forgiving controls.": "Cibles, retours et commandes tolérantes.", "Delight, memory, and habit.": "Plaisir, mémoire et habitude.", "The laws behind the architecture.": "Les lois derrière l'architecture.", "The canonical checklists and standards.": "Les référentiels et standards incontournables.", "Reading and Attention": "Lecture et attention", "Visual Design": "Design visuel", "Heuristics and Principles": "Heuristiques et principes", "Cognitive Laws": "Lois cognitives",
      "Further Reading": "Pour aller plus loin", "Origin": "Origine", "The Universal Set": "Le socle universel", "Designing with Icons": "Concevoir avec des icônes",
      "The Four Principles": "Les quatre principes", "Key Success Criteria": "Critères de succès clés", "The Founders of the Laws": "Les fondateurs des lois",
      "Cited Along the Way": "Cités en chemin", "About This Site": "À propos de ce site", "Elsewhere": "Ailleurs", "Comparison": "Comparaison",
      "Relationship": "Relation", "Distribution": "Distribution", "Composition": "Composition", "Grid Systems": "Systèmes de grille", "Visual Hierarchy": "Hiérarchie visuelle",
      "Watch for": "À surveiller", "Use when": "À utiliser quand", "Best for": "Idéal pour", "Coined by": "Formulé par", "Source": "Source", "Test": "Test",
      "Avoid when": "À éviter quand", "In practice": "En pratique", "Implication": "Implication", "Means": "Signifie", "Effect": "Effet", "Context": "Contexte",
      "Shift": "Évolution", "Examples": "Exemples", "Pattern": "Modèle", "Risk": "Risque", "Counter": "Contre-mesure", "Lives": "Se place", "Defined": "Définition",
      "Pairs with": "S'associe à", "Fix": "Correctif", "Apply": "Appliquer", "Rule": "Règle", "Tactic": "Tactique", "Don't": "À ne pas faire", "Audience": "Audience",
      "Recognition": "Reconnaissance", "Show": "Montrer", "Avoid": "Éviter", "Cost": "Coût", "Tactics": "Tactiques", "Result": "Résultat", "Failure mode": "Mode d'échec",
      "Lever": "Levier", "Always": "Toujours", "Goal": "Objectif", "Fails when": "Échoue quand", "Across": "À travers", "Principle": "Principe", "Surface": "Surface",
      "Skip": "Ignorer", "Design for": "Concevoir pour", "Place here": "Placer ici", "Why": "Pourquoi", "Tools": "Outils", "Then": "Ensuite", "Original": "Original",
      "Guidelines": "Recommandations", "Default": "Défaut", "Symptoms": "Symptômes", "Symptom": "Symptôme", "Upside": "Avantage", "Contains": "Contient",
      "Channels": "Canaux", "Built from": "Construit à partir de", "Apply to": "Appliquer à", "Question": "Question", "Use": "Utiliser", "Prefer": "Préférer", "Catches": "Détecte"
    },
    de: {
      "The Law": "Das Gesetz", "The Model": "Das Modell", "The Effect": "Der Effekt", "The Threshold": "Die Schwelle", "The Research": "Die Forschung", "The Principle": "Das Prinzip", "The Principles": "Die Prinzipien", "The Paradox": "Das Paradox", "The Heuristics": "Die Heuristiken", "The Guidelines": "Die Richtlinien", "Recently viewed": "Zuletzt angesehen", "Bookmarked": "Gemerkt", "No bookmarks yet": "Noch keine Lesezeichen", "Copy link": "Link kopieren", "Copied": "Kopiert", "Email": "E-Mail", "Search": "Suchen", "Site": "Website", "Navigate": "Navigieren", "Home": "Start", "About": "Über", "Glossary": "Glossar", "People": "Personen", "Site Map": "Sitemap",
      "Start Here": "Hier Starten", "Lay Out The Page": "Die Seite Gestalten", "Present And Explain": "Präsentieren Und Erklären", "Structure The Choices": "Auswahl Strukturieren", "Design Actions And Controls": "Aktionen Und Bedienelemente Gestalten", "Keep Them Coming Back": "Nutzer Zurückbringen", "Build The System": "Das System Bauen", "Follow The Rulebooks": "Den Regelwerken Folgen", "Also on the site": "Außerdem auf der Website", "Expand all": "Alle aufklappen", "Collapse all": "Alle einklappen", "Task Type": "Aufgabentyp", "Page Type": "Seitentyp", "Landing Pages": "Landingpages", "Forms": "Formulare", "Tables And Lists": "Tabellen Und Listen", "Detail Pages": "Detailseiten", "Dashboards": "Dashboards", "Navigation And Menus": "Navigation Und Menüs", "Flows And Checkout": "Abläufe Und Checkout", "Every Page": "Jede Seite", "Copy SVG": "SVG kopieren", "Conversational Pages And Side Panels": "Konversationsseiten Und Seitenpanels", "The rules that apply to every screen.": "Die Regeln, die für jeden Screen gelten.", "First impressions, trust, and the pitch.": "Erster Eindruck, Vertrauen und Versprechen.", "Asking for input without losing people.": "Eingaben erfragen, ohne Nutzer zu verlieren.", "Scanning, comparing, and finding the row.": "Scannen, vergleichen und die Zeile finden.", "One thing, fully explained.": "Eine Sache, vollständig erklärt.", "Status at a glance, honestly measured.": "Status auf einen Blick, ehrlich gemessen.", "Getting around without getting lost.": "Sich zurechtfinden, ohne sich zu verlieren.", "Multi-step journeys that get finished.": "Mehrstufige Abläufe, die abgeschlossen werden.", "Chat interfaces and AI copilots.": "Chat-Oberflächen und KI-Copiloten.", "Where the eye goes and why.": "Wohin der Blick geht, und warum.", "Making information effortless to absorb.": "Informationen mühelos erfassbar machen.", "Shaping decisions people can actually make.": "Entscheidungen gestalten, die man treffen kann.", "Targets, feedback, and forgiving controls.": "Ziele, Feedback und fehlertolerante Bedienung.", "Delight, memory, and habit.": "Freude, Erinnerung und Gewohnheit.", "The laws behind the architecture.": "Die Gesetze hinter der Architektur.", "The canonical checklists and standards.": "Die maßgeblichen Checklisten und Standards.", "Reading and Attention": "Lesen und Aufmerksamkeit", "Visual Design": "Visuelles Design", "Heuristics and Principles": "Heuristiken und Prinzipien", "Cognitive Laws": "Kognitive Gesetze",
      "Further Reading": "Weiterführende Literatur", "Origin": "Ursprung", "The Universal Set": "Der universelle Satz", "Designing with Icons": "Gestalten mit Icons",
      "The Four Principles": "Die vier Prinzipien", "Key Success Criteria": "Zentrale Erfolgskriterien", "The Founders of the Laws": "Die Begründer der Gesetze",
      "Cited Along the Way": "Unterwegs zitiert", "About This Site": "Über diese Website", "Elsewhere": "Anderswo", "Comparison": "Vergleich",
      "Relationship": "Beziehung", "Distribution": "Verteilung", "Composition": "Zusammensetzung", "Grid Systems": "Rastersysteme", "Visual Hierarchy": "Visuelle Hierarchie",
      "Watch for": "Achtung", "Use when": "Verwenden wenn", "Best for": "Am besten für", "Coined by": "Geprägt von", "Source": "Quelle", "Test": "Test",
      "Avoid when": "Vermeiden wenn", "In practice": "In der Praxis", "Implication": "Folge", "Means": "Bedeutet", "Effect": "Wirkung", "Context": "Kontext",
      "Shift": "Wandel", "Examples": "Beispiele", "Pattern": "Muster", "Risk": "Risiko", "Counter": "Gegenmittel", "Lives": "Sitzt", "Defined": "Definiert",
      "Pairs with": "Passt zu", "Fix": "Lösung", "Apply": "Anwenden", "Rule": "Regel", "Tactic": "Taktik", "Don't": "Nicht tun", "Audience": "Zielgruppe",
      "Recognition": "Wiedererkennung", "Show": "Zeigen", "Avoid": "Vermeiden", "Cost": "Kosten", "Tactics": "Taktiken", "Result": "Ergebnis", "Failure mode": "Fehlermodus",
      "Lever": "Hebel", "Always": "Immer", "Goal": "Ziel", "Fails when": "Scheitert wenn", "Across": "Über", "Principle": "Prinzip", "Surface": "Sichtbar machen",
      "Skip": "Überspringen", "Design for": "Gestalten für", "Place here": "Hier platzieren", "Why": "Warum", "Tools": "Werkzeuge", "Then": "Dann", "Original": "Original",
      "Guidelines": "Richtlinien", "Default": "Standard", "Symptoms": "Symptome", "Symptom": "Symptom", "Upside": "Vorteil", "Contains": "Enthält",
      "Channels": "Kanäle", "Built from": "Aufgebaut aus", "Apply to": "Anwenden auf", "Question": "Frage", "Use": "Verwenden", "Prefer": "Bevorzugen", "Catches": "Erkennt"
    },
    es: {
      "The Law": "La ley", "The Model": "El modelo", "The Effect": "El efecto", "The Threshold": "El umbral", "The Research": "La investigación", "The Principle": "El principio", "The Principles": "Los principios", "The Paradox": "La paradoja", "The Heuristics": "Las heurísticas", "The Guidelines": "Las directrices", "Recently viewed": "Vistos recientemente", "Bookmarked": "Guardados", "No bookmarks yet": "Aún no hay marcadores", "Copy link": "Copiar enlace", "Copied": "Copiado", "Email": "Correo", "Search": "Buscar", "Site": "Sitio", "Navigate": "Navegar", "Home": "Inicio", "About": "Acerca de", "Glossary": "Glosario", "People": "Personas", "Site Map": "Mapa del sitio",
      "Start Here": "Empieza Aquí", "Lay Out The Page": "Componer La Página", "Present And Explain": "Presentar Y Explicar", "Structure The Choices": "Estructurar Las Opciones", "Design Actions And Controls": "Diseñar Acciones Y Controles", "Keep Them Coming Back": "Hacer Que Vuelvan", "Build The System": "Construir El Sistema", "Follow The Rulebooks": "Seguir Los Manuales", "Also on the site": "También en el sitio", "Expand all": "Expandir todo", "Collapse all": "Contraer todo", "Task Type": "Tipo De Tarea", "Page Type": "Tipo De Página", "Landing Pages": "Páginas De Inicio", "Forms": "Formularios", "Tables And Lists": "Tablas Y Listas", "Detail Pages": "Páginas De Detalle", "Dashboards": "Paneles De Control", "Navigation And Menus": "Navegación Y Menús", "Flows And Checkout": "Flujos Y Pago", "Every Page": "Todas Las Páginas", "Copy SVG": "Copiar SVG", "Conversational Pages And Side Panels": "Páginas Conversacionales Y Paneles Laterales", "The rules that apply to every screen.": "Las reglas que aplican a cada pantalla.", "First impressions, trust, and the pitch.": "Primera impresión, confianza y promesa.", "Asking for input without losing people.": "Pedir datos sin perder a la gente.", "Scanning, comparing, and finding the row.": "Escanear, comparar y encontrar la fila.", "One thing, fully explained.": "Una sola cosa, bien explicada.", "Status at a glance, honestly measured.": "El estado de un vistazo, medido con honestidad.", "Getting around without getting lost.": "Moverse sin perderse.", "Multi-step journeys that get finished.": "Recorridos de varios pasos que se completan.", "Chat interfaces and AI copilots.": "Interfaces de chat y copilotos de IA.", "Where the eye goes and why.": "Adónde va la mirada, y por qué.", "Making information effortless to absorb.": "Hacer la información fácil de absorber.", "Shaping decisions people can actually make.": "Dar forma a decisiones posibles.", "Targets, feedback, and forgiving controls.": "Objetivos, respuesta y controles tolerantes.", "Delight, memory, and habit.": "Deleite, memoria y hábito.", "The laws behind the architecture.": "Las leyes detrás de la arquitectura.", "The canonical checklists and standards.": "Las listas y estándares de referencia.", "Reading and Attention": "Lectura y atención", "Visual Design": "Diseño visual", "Heuristics and Principles": "Heurísticas y principios", "Cognitive Laws": "Leyes cognitivas",
      "Further Reading": "Lecturas recomendadas", "Origin": "Origen", "The Universal Set": "El conjunto universal", "Designing with Icons": "Diseñar con iconos",
      "The Four Principles": "Los cuatro principios", "Key Success Criteria": "Criterios de éxito clave", "The Founders of the Laws": "Los fundadores de las leyes",
      "Cited Along the Way": "Citados en el camino", "About This Site": "Sobre este sitio", "Elsewhere": "En otros lugares", "Comparison": "Comparación",
      "Relationship": "Relación", "Distribution": "Distribución", "Composition": "Composición", "Grid Systems": "Sistemas de retícula", "Visual Hierarchy": "Jerarquía visual",
      "Watch for": "Cuidado con", "Use when": "Usar cuando", "Best for": "Ideal para", "Coined by": "Acuñado por", "Source": "Fuente", "Test": "Prueba",
      "Avoid when": "Evitar cuando", "In practice": "En la práctica", "Implication": "Implicación", "Means": "Significa", "Effect": "Efecto", "Context": "Contexto",
      "Shift": "Cambio", "Examples": "Ejemplos", "Pattern": "Patrón", "Risk": "Riesgo", "Counter": "Contramedida", "Lives": "Se ubica", "Defined": "Definición",
      "Pairs with": "Se combina con", "Fix": "Solución", "Apply": "Aplicar", "Rule": "Regla", "Tactic": "Táctica", "Don't": "No hacer", "Audience": "Audiencia",
      "Recognition": "Reconocimiento", "Show": "Mostrar", "Avoid": "Evitar", "Cost": "Coste", "Tactics": "Tácticas", "Result": "Resultado", "Failure mode": "Modo de fallo",
      "Lever": "Palanca", "Always": "Siempre", "Goal": "Objetivo", "Fails when": "Falla cuando", "Across": "A través de", "Principle": "Principio", "Surface": "Hacer visible",
      "Skip": "Omitir", "Design for": "Diseñar para", "Place here": "Colocar aquí", "Why": "Por qué", "Tools": "Herramientas", "Then": "Después", "Original": "Original",
      "Guidelines": "Pautas", "Default": "Predeterminado", "Symptoms": "Síntomas", "Symptom": "Síntoma", "Upside": "Ventaja", "Contains": "Contiene",
      "Channels": "Canales", "Built from": "Construido a partir de", "Apply to": "Aplicar a", "Question": "Pregunta", "Use": "Usar", "Prefer": "Preferir", "Catches": "Detecta"
    },
    ja: {
      "The Law": "法則", "The Model": "モデル", "The Effect": "効果", "The Threshold": "しきい値", "The Research": "研究", "The Principle": "原則", "The Principles": "原則", "The Paradox": "パラドックス", "The Heuristics": "ヒューリスティクス", "The Guidelines": "ガイドライン", "Recently viewed": "最近見たページ", "Bookmarked": "ブックマーク", "No bookmarks yet": "ブックマークはまだありません", "Copy link": "リンクをコピー", "Copied": "コピーしました", "Email": "メール", "Search": "検索", "Site": "サイト", "Navigate": "ナビゲート", "Home": "ホーム", "About": "概要", "Glossary": "用語集", "People": "人物", "Site Map": "サイトマップ",
      "Start Here": "まずはここから", "Lay Out The Page": "ページを組む", "Present And Explain": "伝えて説明する", "Structure The Choices": "選択肢を設計する", "Design Actions And Controls": "操作とコントロールを設計する", "Keep Them Coming Back": "また使いたくさせる", "Build The System": "システムを作る", "Follow The Rulebooks": "ルールブックに従う", "Also on the site": "サイト内のその他", "Expand all": "すべて開く", "Collapse all": "すべて閉じる", "Task Type": "タスクタイプ", "Page Type": "ページタイプ", "Landing Pages": "ランディングページ", "Forms": "フォーム", "Tables And Lists": "テーブルとリスト", "Detail Pages": "詳細ページ", "Dashboards": "ダッシュボード", "Navigation And Menus": "ナビゲーションとメニュー", "Flows And Checkout": "フローと決済", "Every Page": "すべてのページ", "Copy SVG": "SVGをコピー", "Conversational Pages And Side Panels": "会話型ページとサイドパネル", "The rules that apply to every screen.": "すべての画面に当てはまるルール。", "First impressions, trust, and the pitch.": "第一印象と信頼、そして訴求。", "Asking for input without losing people.": "離脱させずに入力してもらう。", "Scanning, comparing, and finding the row.": "走査し、比較し、行を見つける。", "One thing, fully explained.": "ひとつの物事を、余さず説明する。", "Status at a glance, honestly measured.": "状態をひと目で、正直に測る。", "Getting around without getting lost.": "迷わずに移動できるように。", "Multi-step journeys that get finished.": "完了までたどり着く複数ステップの流れ。", "Chat interfaces and AI copilots.": "チャットUIとAIコパイロット。", "Where the eye goes and why.": "視線はどこへ、なぜ向かうのか。", "Making information effortless to absorb.": "情報を楽に理解できるようにする。", "Shaping decisions people can actually make.": "決められる選択肢の設計。", "Targets, feedback, and forgiving controls.": "ターゲット、フィードバック、寛容な操作。", "Delight, memory, and habit.": "喜び、記憶、習慣。", "The laws behind the architecture.": "アーキテクチャを支える法則。", "The canonical checklists and standards.": "定番のチェックリストと標準。", "Reading and Attention": "読みと注意", "Visual Design": "ビジュアルデザイン", "Heuristics and Principles": "ヒューリスティクスと原則", "Cognitive Laws": "認知の法則",
      "Further Reading": "参考文献", "Origin": "起源", "The Universal Set": "ユニバーサルセット", "Designing with Icons": "アイコンを使ったデザイン",
      "The Four Principles": "4つの原則", "Key Success Criteria": "主要な達成基準", "The Founders of the Laws": "法則の創始者たち",
      "Cited Along the Way": "本文で引用された人々", "About This Site": "このサイトについて", "Elsewhere": "その他のリンク", "Comparison": "比較",
      "Relationship": "関係", "Distribution": "分布", "Composition": "構成", "Grid Systems": "グリッドシステム", "Visual Hierarchy": "視覚的階層",
      "Watch for": "注意点", "Use when": "使う場面", "Best for": "最適な用途", "Coined by": "提唱者", "Source": "出典", "Test": "テスト",
      "Avoid when": "避ける場面", "In practice": "実践では", "Implication": "示唆", "Means": "意味", "Effect": "効果", "Context": "文脈",
      "Shift": "変化", "Examples": "例", "Pattern": "パターン", "Risk": "リスク", "Counter": "対策", "Lives": "配置場所", "Defined": "定義",
      "Pairs with": "組み合わせ", "Fix": "解決策", "Apply": "適用", "Rule": "ルール", "Tactic": "戦術", "Don't": "してはいけない", "Audience": "対象",
      "Recognition": "認知度", "Show": "表示", "Avoid": "回避", "Cost": "コスト", "Tactics": "戦術", "Result": "結果", "Failure mode": "失敗モード",
      "Lever": "レバー", "Always": "常に", "Goal": "目標", "Fails when": "失敗する条件", "Across": "適用範囲", "Principle": "原則", "Surface": "可視化",
      "Skip": "スキップ", "Design for": "設計対象", "Place here": "配置位置", "Why": "理由", "Tools": "ツール", "Then": "次に", "Original": "原典",
      "Guidelines": "ガイドライン", "Default": "デフォルト", "Symptoms": "症状", "Symptom": "症状", "Upside": "利点", "Contains": "含まれるもの",
      "Channels": "チャネル", "Built from": "構成要素", "Apply to": "適用先", "Question": "問い", "Use": "使用", "Prefer": "推奨", "Catches": "検出"
    },
    zh: {
      "The Law": "定律", "The Model": "模型", "The Effect": "效应", "The Threshold": "阈值", "The Research": "研究", "The Principle": "原则", "The Principles": "原则", "The Paradox": "悖论", "The Heuristics": "启发式", "The Guidelines": "指南", "Recently viewed": "最近浏览", "Bookmarked": "已收藏", "No bookmarks yet": "暂无收藏", "Copy link": "复制链接", "Copied": "已复制", "Email": "邮件", "Search": "搜索", "Site": "站点", "Navigate": "导航", "Home": "首页", "About": "关于", "Glossary": "术语表", "People": "人物", "Site Map": "网站地图",
      "Start Here": "从这里开始", "Lay Out The Page": "布局页面", "Present And Explain": "呈现与解释", "Structure The Choices": "组织选项", "Design Actions And Controls": "设计操作与控件", "Keep Them Coming Back": "让用户再次回来", "Build The System": "构建系统", "Follow The Rulebooks": "遵循规则手册", "Also on the site": "站内其他", "Expand all": "全部展开", "Collapse all": "全部折叠", "Task Type": "任务类型", "Page Type": "页面类型", "Landing Pages": "落地页", "Forms": "表单", "Tables And Lists": "表格与列表", "Detail Pages": "详情页", "Dashboards": "仪表盘", "Navigation And Menus": "导航与菜单", "Flows And Checkout": "流程与结账", "Every Page": "所有页面", "Copy SVG": "复制SVG", "Conversational Pages And Side Panels": "对话式页面与侧边栏", "The rules that apply to every screen.": "适用于每个界面的规则。", "First impressions, trust, and the pitch.": "第一印象、信任与卖点。", "Asking for input without losing people.": "获取输入而不流失用户。", "Scanning, comparing, and finding the row.": "扫视、比较、找到那一行。", "One thing, fully explained.": "把一件事讲透。", "Status at a glance, honestly measured.": "一眼看清状态，诚实度量。", "Getting around without getting lost.": "四处浏览而不迷路。", "Multi-step journeys that get finished.": "能走到终点的多步流程。", "Chat interfaces and AI copilots.": "聊天界面与AI副驾。", "Where the eye goes and why.": "视线去向何处，为什么。", "Making information effortless to absorb.": "让信息毫不费力地被理解。", "Shaping decisions people can actually make.": "塑造真正能做出的决定。", "Targets, feedback, and forgiving controls.": "目标、反馈与宽容的控件。", "Delight, memory, and habit.": "愉悦、记忆与习惯。", "The laws behind the architecture.": "架构背后的定律。", "The canonical checklists and standards.": "权威清单与标准。", "Reading and Attention": "阅读与注意力", "Visual Design": "视觉设计", "Heuristics and Principles": "启发式与原则", "Cognitive Laws": "认知定律",
      "Further Reading": "延伸阅读", "Origin": "起源", "The Universal Set": "通用图标集", "Designing with Icons": "用图标设计",
      "The Four Principles": "四大原则", "Key Success Criteria": "关键成功标准", "The Founders of the Laws": "定律的创立者",
      "Cited Along the Way": "文中引用的人物", "About This Site": "关于本站", "Elsewhere": "其他平台", "Comparison": "比较",
      "Relationship": "关系", "Distribution": "分布", "Composition": "构成", "Grid Systems": "网格系统", "Visual Hierarchy": "视觉层级",
      "Watch for": "注意事项", "Use when": "适用场景", "Best for": "最适合", "Coined by": "提出者", "Source": "来源", "Test": "检验",
      "Avoid when": "避免场景", "In practice": "实践中", "Implication": "启示", "Means": "含义", "Effect": "效果", "Context": "语境",
      "Shift": "转变", "Examples": "示例", "Pattern": "模式", "Risk": "风险", "Counter": "对策", "Lives": "位置", "Defined": "定义",
      "Pairs with": "搭配", "Fix": "修复", "Apply": "应用", "Rule": "规则", "Tactic": "策略", "Don't": "不要", "Audience": "受众",
      "Recognition": "认知度", "Show": "展示", "Avoid": "避免", "Cost": "成本", "Tactics": "策略", "Result": "结果", "Failure mode": "失败模式",
      "Lever": "杠杆", "Always": "始终", "Goal": "目标", "Fails when": "失效条件", "Across": "适用范围", "Principle": "原则", "Surface": "呈现",
      "Skip": "跳过", "Design for": "设计对象", "Place here": "放置位置", "Why": "原因", "Tools": "工具", "Then": "然后", "Original": "原文",
      "Guidelines": "指南", "Default": "默认", "Symptoms": "症状", "Symptom": "症状", "Upside": "优点", "Contains": "包含",
      "Channels": "渠道", "Built from": "构建自", "Apply to": "应用于", "Question": "问题", "Use": "使用", "Prefer": "优先", "Catches": "捕捉"
    }
  };

  // titles[page-h1] = [fr, de, es, ja, zh]
  const TITLES = {
    "Doherty Threshold": ["Seuil de Doherty", "Doherty-Schwelle", "Umbral de Doherty", "ドハティのしきい値", "多尔蒂阈值"],
    "Serial Position Effect": ["Effet de position sérielle", "Serieller Positionseffekt", "Efecto de posición serial", "系列位置効果", "系列位置效应"],
    "IKEA Effect": ["Effet IKEA", "IKEA-Effekt", "Efecto IKEA", "イケア効果", "宜家效应"],
    "Contour Bias": ["Biais des contours", "Kontur-Bias", "Sesgo de contorno", "輪郭バイアス", "轮廓偏好"],
    "Automation Bias": ["Biais d’automatisation", "Automation Bias", "Sesgo de automatización", "自動化バイアス", "自动化偏差"],
    "By Year": ["Par année", "Nach Jahr", "Por año", "年代順", "按年份"],
    "Uncanny Valley": ["Vallée de l’étrange", "Uncanny Valley", "Valle inquietante", "不気味の谷", "恐怖谷"],
    "Von Restorff Effect": ["Effet von Restorff", "Von-Restorff-Effekt", "Efecto von Restorff", "フォン・レストルフ効果", "冯·雷斯托夫效应"],
    "Zeigarnik Effect": ["Effet Zeigarnik", "Zeigarnik-Effekt", "Efecto Zeigarnik", "ツァイガルニク効果", "蔡格尼克效应"],
    "Peak-End Rule": ["Règle pic-fin", "Peak-End-Regel", "Regla del pico y final", "ピーク・エンドの法則", "峰终定律"],
    "Aesthetic-Usability Effect": ["Effet esthétique-utilisabilité", "Ästhetik-Usability-Effekt", "Efecto estética-usabilidad", "美的ユーザビリティ効果", "美即好用效应"],
    "Shneiderman's Eight Golden Rules": ["Les huit règles d'or de Shneiderman", "Shneidermans acht goldene Regeln", "Las ocho reglas de oro de Shneiderman", "シュナイダーマンの8つの黄金律", "施耐德曼八大黄金法则"],
    "Progressive Disclosure": ["Divulgation progressive", "Progressive Offenlegung", "Divulgación progresiva", "段階的開示", "渐进式披露"],
    "Steering Law": ["Loi du pilotage", "Steering-Gesetz", "Ley de conducción", "ステアリングの法則", "转向定律"],
    "Cognitive Load Theory": ["Théorie de la charge cognitive", "Cognitive-Load-Theorie", "Teoría de la carga cognitiva", "認知負荷理論", "认知负荷理论"],
    "Chesterton's Fence": ["La clôture de Chesterton", "Chestertons Zaun", "La valla de Chesterton", "チェスタトンのフェンス", "切斯特顿的栅栏"],
    "Curse of Knowledge": ["Malédiction du savoir", "Fluch des Wissens", "Maldición del conocimiento", "知識の呪い", "知识的诅咒"],
    "Hick's Law": ["Loi de Hick", "Hicksches Gesetz", "Ley de Hick", "ヒックの法則", "希克定律"],
    "Fitts's Law": ["Loi de Fitts", "Fitts' Gesetz", "Ley de Fitts", "フィッツの法則", "菲茨定律"],
    "Conway's Law": ["Loi de Conway", "Conways Gesetz", "Ley de Conway", "コンウェイの法則", "康威定律"],
    "Jakob's Law": ["Loi de Jakob", "Jakobs Gesetz", "Ley de Jakob", "ヤコブの法則", "雅各布定律"],
    "Miller's Law": ["Loi de Miller", "Millers Gesetz", "Ley de Miller", "ミラーの法則", "米勒定律"],
    "Gall's Law": ["Loi de Gall", "Galls Gesetz", "Ley de Gall", "ゴールの法則", "加尔定律"],
    "Goodhart's Law": ["Loi de Goodhart", "Goodharts Gesetz", "Ley de Goodhart", "グッドハートの法則", "古德哈特定律"],
    "Hofstadter's Law": ["Loi de Hofstadter", "Hofstadters Gesetz", "Ley de Hofstadter", "ホフスタッターの法則", "侯世达定律"],
    "Postel's Law": ["Loi de Postel", "Postels Gesetz", "Ley de Postel", "ポステルの法則", "波斯特尔定律"],
    "Tesler's Law": ["Loi de Tesler", "Teslers Gesetz", "Ley de Tesler", "テスラーの法則", "特斯勒定律"],
    "Weber-Fechner Law": ["Loi de Weber-Fechner", "Weber-Fechner-Gesetz", "Ley de Weber-Fechner", "ウェーバー・フェヒナーの法則", "韦伯-费希纳定律"],
    "Yerkes-Dodson Law": ["Loi de Yerkes-Dodson", "Yerkes-Dodson-Gesetz", "Ley de Yerkes-Dodson", "ヤーキーズ・ドットソンの法則", "耶基斯-多德森定律"],
    "Pareto Principle": ["Principe de Pareto", "Pareto-Prinzip", "Principio de Pareto", "パレートの法則", "帕累托法则"],
    "Paradox of Choice": ["Paradoxe du choix", "Paradox der Wahl", "Paradoja de la elección", "選択のパラドックス", "选择悖论"],
    "Power Law of Practice": ["Loi de puissance de la pratique", "Potenzgesetz der Übung", "Ley de potencia de la práctica", "練習の冪法則", "练习幂定律"],
    "Fogg Behavior Model": ["Modèle comportemental de Fogg", "Fogg-Verhaltensmodell", "Modelo de conducta de Fogg", "フォッグ行動モデル", "福格行为模型"],
    "Hook Model": ["Modèle Hook", "Hook-Modell", "Modelo Hook", "フックモデル", "上瘾模型"],
    "Gestalt Principles": ["Principes de la Gestalt", "Gestaltprinzipien", "Principios de la Gestalt", "ゲシュタルトの原則", "格式塔原则"],
    "Gutenberg Principle": ["Principe de Gutenberg", "Gutenberg-Prinzip", "Principio de Gutenberg", "グーテンベルクの原則", "古腾堡原则"],
    "Eye Scanning Patterns": ["Schémas de lecture visuelle", "Blickmuster", "Patrones de escaneo visual", "視線走査パターン", "视觉扫描模式"],
    "Eye-Scanning Patterns": ["Schémas de lecture visuelle", "Blickmuster", "Patrones de escaneo visual", "視線走査パターン", "视觉扫描模式"],
    "Data Visualization": ["Visualisation de données", "Datenvisualisierung", "Visualización de datos", "データビジュアライゼーション", "数据可视化"],
    "Grid and Hierarchy": ["Grille et hiérarchie", "Raster und Hierarchie", "Retícula y jerarquía", "グリッドと階層", "网格与层级"],
    "Navigation Patterns": ["Modèles de navigation", "Navigationsmuster", "Patrones de navegación", "ナビゲーションパターン", "导航模式"],
    "Universal Icons": ["Icônes universelles", "Universelle Icons", "Iconos universales", "ユニバーサルアイコン", "通用图标"],
    "Nielsen's 10 Heuristics": ["Les 10 heuristiques de Nielsen", "Nielsens 10 Heuristiken", "Las 10 heurísticas de Nielsen", "ニールセンの10ヒューリスティクス", "尼尔森十大启发式原则"],
    "Nielsen's 10 Usability Heuristics": ["Les 10 heuristiques de Nielsen", "Nielsens 10 Heuristiken", "Las 10 heurísticas de Nielsen", "ニールセンの10ヒューリスティクス", "尼尔森十大启发式原则"],
    "Norman's Principles": ["Principes de Norman", "Normans Prinzipien", "Principios de Norman", "ノーマンの原則", "诺曼原则"],
    "Dieter Rams' 10 Principles": ["Les 10 principes de Dieter Rams", "Dieter Rams' 10 Prinzipien", "Los 10 principios de Dieter Rams", "ディーター・ラムスの10原則", "迪特·拉姆斯十大原则"],
    "Dieter Rams' 10 Principles of Good Design": ["Les 10 principes de Dieter Rams", "Dieter Rams' 10 Prinzipien", "Los 10 principios de Dieter Rams", "ディーター・ラムスの10原則", "迪特·拉姆斯十大原则"],
    "Rams' 10 Principles": ["Les 10 principes de Rams", "Rams' 10 Prinzipien", "Los 10 principios de Rams", "ラムスの10原則", "拉姆斯十大原则"],
    "Tognazzini's First Principles": ["Premiers principes de Tognazzini", "Tognazzinis Grundprinzipien", "Primeros principios de Tognazzini", "トグナッツィーニの第一原則", "托格纳齐尼第一原则"],
    "WCAG and POUR": ["WCAG et POUR", "WCAG und POUR", "WCAG y POUR", "WCAGとPOUR", "WCAG与POUR"],
    "UX Guidelines": ["UX Guidelines", "UX Guidelines", "UX Guidelines", "UX Guidelines", "UX Guidelines"],
    "Design System": ["Système de design", "Designsystem", "Sistema de diseño", "デザインシステム", "设计系统"],
    "Glossary": ["Glossaire", "Glossar", "Glosario", "用語集", "术语表"],
    "People": ["Personnalités", "Personen", "Personas", "人物", "人物"],
    "About": ["À propos", "Über", "Acerca de", "概要", "关于"],
    "Site Map": ["Plan du site", "Sitemap", "Mapa del sitio", "サイトマップ", "网站地图"]
  };

  // per-page tagline and subtitle: PAGE[data-page or filename] = { tag: {...}, sub: {...} }
  const HEAD = {
    "index": { sub: {
      fr: "Une bibliothèque grandissante de 45 références UX fondées sur la recherche, pour les designers, chercheurs et ingénieurs.",
      de: "Eine wachsende Bibliothek von 45 forschungsbasierten UX-Referenzen für Designer, Forschende und Entwickler.",
      es: "Una biblioteca creciente de 45 referencias de UX basadas en la investigación para diseñadores, investigadores e ingenieros.",
      ja: "研究に裏付けられた45件のUXリファレンスからなる、デザイナー、リサーチャー、エンジニアのための成長し続けるライブラリ。",
      zh: "一个不断成长的资料库，收录45篇以研究为依据的UX参考，为设计师、研究者和工程师而建。" } },
    "hick": { tag: {
      fr: "Plus de choix, des décisions plus longues.", de: "Mehr Auswahl, längere Entscheidungen.", es: "Más opciones, decisiones más largas.", ja: "選択肢が増えるほど、決定は遅くなる。", zh: "选择越多，决定越慢。" }, sub: {
      fr: "Plus vous présentez de choix, plus chaque décision prend du temps. La loi de Hick façonne les menus, les réglages et l'onboarding — ainsi que les techniques pour la contourner.",
      de: "Je mehr Auswahl Sie anbieten, desto länger dauert jede Entscheidung. Das Hicksche Gesetz prägt Menüs, Einstellungen und Onboarding — und die Techniken, die es umgehen.",
      es: "Cuantas más opciones presentas, más tarda cada decisión. La ley de Hick da forma a menús, ajustes y onboarding — junto con las técnicas para sortearla.",
      ja: "提示する選択肢が多いほど、あらゆる決定に時間がかかる。ヒックの法則はメニュー、設定、オンボーディングの設計と、その回避テクニックを形づくる。",
      zh: "呈现的选择越多，每个决定花的时间就越长。希克定律塑造着菜单、设置和新手引导——以及绕过它的各种技巧。" } },
    "fitts": { tag: {
      fr: "Grand et proche.", de: "Groß und nah.", es: "Grande y cerca.", ja: "大きく、近くに。", zh: "又大又近。" }, sub: {
      fr: "Le temps pour atteindre une cible dépend de sa taille et de sa distance. La loi de Fitts régit chaque bouton, lien et zone tactile — et explique pourquoi les bords et les coins semblent si rapides.",
      de: "Die Zeit zum Treffen eines Ziels hängt von Größe und Entfernung ab. Fitts' Gesetz bestimmt jeden Button, Link und jedes Tippziel — und erklärt, warum sich Ränder und Ecken so schnell anfühlen.",
      es: "El tiempo para alcanzar un objetivo depende de su tamaño y distancia. La ley de Fitts gobierna cada botón, enlace y zona táctil — y explica por qué los bordes y esquinas se sienten tan rápidos.",
      ja: "ターゲットに到達する時間は、その大きさと距離で決まる。フィッツの法則はすべてのボタン、リンク、タップ領域を支配し、画面の端や角がなぜ速く感じられるかを説明する。",
      zh: "命中目标所需的时间取决于它的大小和距离。菲茨定律支配着每个按钮、链接和触控目标——也解释了为什么屏幕边缘和角落用起来特别快。" } },
    "conway": { tag: {
      fr: "Toute organisation qui conçoit un système produit un design qui copie son organigramme.", de: "Jede Organisation, die ein System entwirft, erzeugt ein Design, das ihr Organigramm kopiert.", es: "Toda organización que diseña un sistema produce un diseño que copia su organigrama.", ja: "システムを設計する組織は、組織図を写し取った設計を生み出す。", zh: "设计系统的组织，其产出必然复制该组织的沟通结构。" }, sub: {
      fr: "L'observation de Melvin Conway (1967) sur la programmation — et la règle la plus fiable pour prédire où un produit aura des coutures. Partout où l'équipe doit passer le relais, le produit le fait aussi.",
      de: "Melvin Conways Beobachtung von 1967 über das Programmieren — und die zuverlässigste Regel, um vorherzusagen, wo ein Produkt Nähte haben wird. Wo immer das Team übergeben muss, tut es das Produkt auch.",
      es: "La observación de Melvin Conway (1967) sobre la programación — y la regla más fiable para predecir dónde tendrá costuras un producto. Donde el equipo tiene que pasar el trabajo, el producto también.",
      ja: "1967年のメルヴィン・コンウェイの観察——プロダクトの「継ぎ目」がどこにできるかを予測する最も確実なルール。チームが仕事を引き継ぐ場所には、プロダクトにも継ぎ目ができる。",
      zh: "梅尔文·康威1967年对编程的观察——预测产品会在哪里出现接缝的最可靠规则。团队需要交接的地方，产品也会有接缝。" } },
    "jakob": { tag: {
      fr: "Les utilisateurs passent le plus clair de leur temps sur d'autres sites.", de: "Nutzer verbringen die meiste Zeit auf anderen Websites.", es: "Los usuarios pasan la mayor parte del tiempo en otros sitios.", ja: "ユーザーは他のサイトで大半の時間を過ごしている。", zh: "用户的大部分时间花在其他网站上。" }, sub: {
      fr: "Les gens passent le plus clair de leur temps sur d'autres sites, donc ils s'attendent à ce que le vôtre fonctionne pareil. Suivez les conventions — et restez attentif, car l'IA est en train de les réécrire.",
      de: "Menschen verbringen die meiste Zeit auf anderen Websites und erwarten, dass Ihre genauso funktioniert. Folgen Sie den Konventionen — und bleiben Sie wachsam, denn KI schreibt gerade um, was Konvention bedeutet.",
      es: "La gente pasa la mayor parte del tiempo en otros sitios, así que espera que el tuyo funcione igual. Sigue las convenciones — y presta atención, porque la IA está reescribiendo lo que significan.",
      ja: "人々は他のサイトで大半の時間を過ごすため、あなたのサイトも同じように動くことを期待する。慣習に従うこと——そしてAIが慣習を書き換えつつある今、注意深く見守ること。",
      zh: "人们的大部分时间花在其他网站上，所以他们期望你的网站也一样运作。遵循惯例——并保持关注，因为AI正在改写惯例的定义。" } },
    "miller": { tag: {
      fr: "Environ sept éléments, plus ou moins deux.", de: "Etwa sieben Dinge, plus oder minus zwei.", es: "Unas siete cosas, más o menos dos.", ja: "およそ7つ、プラスマイナス2。", zh: "大约七件事，上下浮动两件。" }, sub: {
      fr: "L'article de George Miller (1956) a chiffré la mémoire de travail — environ sept blocs. Le chiffre est flou ; la leçon est que la mémoire est limitée, et que le design doit regrouper l'information pour qu'on la retienne sans effort.",
      de: "George Millers Aufsatz von 1956 bezifferte das Arbeitsgedächtnis — etwa sieben Einheiten. Die Zahl ist unscharf; die Lehre ist, dass das Gedächtnis klein ist und Design Informationen so gruppieren muss, dass man sie mühelos halten kann.",
      es: "El artículo de George Miller (1956) puso número a la memoria de trabajo — unos siete bloques. El número es difuso; la lección es que la memoria es pequeña y el diseño debe agrupar la información para retenerla sin esfuerzo.",
      ja: "1956年のジョージ・ミラーの論文はワーキングメモリに数字を与えた——約7チャンク。数字自体は曖昧だが、教訓は明確だ。記憶は小さく、デザインの仕事は情報をまとめて負担なく保持できるようにすることである。",
      zh: "乔治·米勒1956年的论文为工作记忆给出了一个数字——约七个组块。数字本身是模糊的；真正的教训是记忆容量很小，设计的职责是将信息分组，让用户毫不费力地记住。" } },
    "gall": { tag: {
      fr: "Les systèmes complexes qui fonctionnent ont évolué à partir de systèmes simples qui fonctionnaient.", de: "Komplexe Systeme, die funktionieren, entstanden aus einfachen Systemen, die funktionierten.", es: "Los sistemas complejos que funcionan evolucionaron de sistemas simples que funcionaban.", ja: "機能する複雑なシステムは、機能していた単純なシステムから進化したものだ。", zh: "能运作的复杂系统，都是从能运作的简单系统演化而来。" }, sub: {
      fr: "L'observation de John Gall (1975), tirée de Systemantics : on ne peut pas concevoir un système complexe de zéro et le faire fonctionner. Les systèmes complexes descendent de systèmes simples livrés et utilisés. Sautez l'ancêtre simple et le descendant ne respire jamais.",
      de: "John Galls Beobachtung von 1975 aus Systemantics: Man kann kein komplexes System von Grund auf entwerfen und erwarten, dass es funktioniert. Die komplexen stammen von einfachen ab, die ausgeliefert und genutzt wurden. Überspringt man den einfachen Vorfahren, atmet der Nachkomme nie.",
      es: "La observación de John Gall (1975), de Systemantics: no puedes diseñar un sistema complejo desde cero y que funcione. Los complejos descienden de sistemas simples que se entregaron y usaron. Sáltate el ancestro simple y el descendiente nunca respira.",
      ja: "1975年、ジョン・ゴールが『Systemantics』で述べた観察——複雑なシステムをゼロから設計して機能させることはできない。機能する複雑なシステムは、実際に使われた単純なシステムの子孫である。単純な祖先を飛ばせば、子孫は決して息をしない。",
      zh: "约翰·加尔1975年在《系统学》中的观察：你无法从零设计一个复杂系统并让它运作。复杂系统都是已交付、已使用的简单系统的后代。跳过简单的祖先，后代就永远无法存活。" } },
    "goodhart": { tag: {
      fr: "Quand une mesure devient un objectif, elle cesse d'être une bonne mesure.", de: "Wird eine Messgröße zum Ziel, hört sie auf, eine gute Messgröße zu sein.", es: "Cuando una medida se convierte en objetivo, deja de ser una buena medida.", ja: "指標が目標になったとき、それは良い指標であることをやめる。", zh: "当一个指标成为目标，它就不再是好指标。" }, sub: {
      fr: "L'observation de Charles Goodhart (1975), affûtée par Marilyn Strathern : dès qu'un chiffre sert à juger des personnes, il dérive de ce qu'il mesurait. KPIs, OKRs et signaux d'entraînement d'IA s'y heurtent de plein fouet.",
      de: "Charles Goodharts Beobachtung von 1975, geschärft von Marilyn Strathern: Sobald eine Zahl benutzt wird, um Menschen zu beurteilen, entfernt sie sich von dem, was sie maß. KPIs, OKRs und KI-Trainingssignale laufen frontal dagegen.",
      es: "La observación de Charles Goodhart (1975), afinada por Marilyn Strathern: en cuanto un número se usa para juzgar a las personas, se aleja de lo que medía. KPIs, OKRs y señales de entrenamiento de IA chocan de frente con esto.",
      ja: "1975年のチャールズ・グッドハートの観察を、マリリン・ストラザーンが研ぎ澄ました——数字が人を評価するために使われた瞬間、その数字は本来測っていたものから乖離していく。KPI、OKR、AIの訓練シグナルはすべてこの問題に正面から突き当たる。",
      zh: "查尔斯·古德哈特1975年的观察，经玛丽莲·斯特拉森提炼：一旦某个数字被用来评判人，它就会偏离原本要衡量的东西。KPI、OKR和AI训练信号都正面撞上这条定律。" } },
    "hofstadter": { tag: {
      fr: "Cela prend toujours plus de temps que prévu — même en tenant compte de cette loi.", de: "Es dauert immer länger als erwartet — selbst wenn man dieses Gesetz einberechnet.", es: "Siempre tarda más de lo que esperas — incluso teniendo en cuenta esta ley.", ja: "常に予想より時間がかかる——この法則を織り込んでいても。", zh: "事情总比你预期的更花时间——即使你已考虑到这条定律。" }, sub: {
      fr: "Tirée du livre de Douglas Hofstadter (1979) Gödel, Escher, Bach. La blague autoréférentielle qui est aussi une règle de travail pour l'estimation logicielle : chaque projet prend plus de temps que votre estimation honnête, et gonfler l'estimation n'y change rien.",
      de: "Aus Douglas Hofstadters Buch Gödel, Escher, Bach (1979). Der selbstbezügliche Witz, der zugleich eine Arbeitsregel für Softwareschätzung ist: Jedes Projekt dauert länger als die ehrliche Schätzung, und Puffer beheben das nicht.",
      es: "Del libro de Douglas Hofstadter (1979) Gödel, Escher, Bach. El chiste autorreferencial que también es una regla práctica de estimación de software: cada proyecto tarda más que tu estimación honesta, y acolchar la estimación no lo arregla.",
      ja: "1979年、ダグラス・ホフスタッターの『ゲーデル、エッシャー、バッハ』より。自己言及的なジョークでありながら、ソフトウェア見積もりの実用則でもある——あらゆるプロジェクトは正直な見積もりより長くかかり、見積もりを水増ししても解決しない。",
      zh: "出自侯世达1979年的著作《哥德尔、艾舍尔、巴赫》。这个自指的玩笑也是软件估算的实用规则：每个项目都比你诚实的估计更耗时，而加大估计值也无济于事。" } },
    "postel": { tag: {
      fr: "Soyez conservateur dans ce que vous envoyez, libéral dans ce que vous acceptez.", de: "Sei konservativ in dem, was du sendest, liberal in dem, was du akzeptierst.", es: "Sé conservador en lo que envías, liberal en lo que aceptas.", ja: "送信するものには厳格に、受信するものには寛容に。", zh: "发送时保守，接收时宽容。" }, sub: {
      fr: "Le principe de robustesse de Jon Postel (1980) est né de la spécification TCP — une règle pour que les réseaux tolèrent des pairs négligents sans le devenir eux-mêmes. La même règle s'applique aux interfaces : soyez strict sur ce que vous produisez, indulgent avec ce que les utilisateurs vous donnent.",
      de: "Jon Postels Robustheitsprinzip von 1980 stammt aus der TCP-Spezifikation — eine Regel, damit Netzwerke schlampige Gegenstellen tolerieren, ohne selbst schlampig zu werden. Dieselbe Regel gilt für Interfaces: streng bei dem, was man erzeugt, nachsichtig mit dem, was Nutzer liefern.",
      es: "El principio de robustez de Jon Postel (1980) salió de la especificación TCP — una regla para que las redes toleren pares descuidados sin volverse descuidadas. La misma regla aplica a las interfaces: estricto con lo que produces, tolerante con lo que te dan los usuarios.",
      ja: "1980年、ジョン・ポステルの堅牢性原則はTCP仕様から生まれた——ネットワークが雑な相手を許容しながら、自らは雑にならないためのルール。同じルールはインターフェースにもきれいに当てはまる。生成するものには厳格に、ユーザーが渡してくるものには寛容に。",
      zh: "乔恩·波斯特尔1980年的健壮性原则源自TCP规范——让网络容忍马虎的对端而自身不变马虎的规则。同样的规则完美映射到界面上：对你输出的严格，对用户给你的宽容。" } },
    "tesler": { tag: {
      fr: "Tout système a une complexité qu'on ne peut pas supprimer — seulement déplacer.", de: "Jedes System hat eine Komplexität, die sich nicht entfernen lässt — nur verschieben.", es: "Todo sistema tiene una complejidad que no se puede eliminar — solo mover.", ja: "あらゆるシステムには、取り除けず移動しかできない複雑さがある。", zh: "每个系统都有无法消除、只能转移的复杂性。" }, sub: {
      fr: "Tout système porte une part irréductible de complexité. La seule question est de savoir qui l'absorbe — le système ou l'utilisateur. Un bon design en prend discrètement autant qu'il peut.",
      de: "Jedes System trägt ein irreduzibles Maß an Komplexität. Die einzige Frage ist, wer sie absorbiert — das System oder der Nutzer. Gutes Design übernimmt still so viel wie möglich.",
      es: "Todo sistema carga una cantidad irreducible de complejidad. La única pregunta es quién la absorbe — el sistema o el usuario. El buen diseño asume silenciosamente toda la que puede.",
      ja: "あらゆるシステムには削減できない複雑さがある。問題はそれを誰が引き受けるかだ——システムか、ユーザーか。良いデザインは、できる限り多くを静かに引き受ける。",
      zh: "每个系统都承载着不可削减的复杂性。唯一的问题是谁来消化它——系统还是用户。好的设计会默默承担尽可能多的部分。" } },
    "weber-fechner": { tag: {
      fr: "Le plus petit changement perceptible est proportionnel à l'original.", de: "Die kleinste wahrnehmbare Änderung skaliert mit dem Ausgangswert.", es: "El cambio más pequeño perceptible escala con el original.", ja: "気づける最小の変化は、元の大きさに比例する。", zh: "可察觉的最小变化与原始量成正比。" }, sub: {
      fr: "Ernst Weber (1834) et Gustav Fechner (1860) ont formalisé la relation entre stimulus physique et intensité perçue. Le plus petit changement détectable n'est pas une quantité fixe — c'est une proportion fixe de ce qui existe déjà. La loi apparaît dans le volume, la luminosité, les prix, le poids, le timing d'animation et le contraste.",
      de: "Ernst Weber (1834) und Gustav Fechner (1860) formalisierten die Beziehung zwischen physischem Reiz und wahrgenommener Intensität. Die kleinste erkennbare Änderung ist kein fester Betrag — sondern ein fester Anteil des Vorhandenen. Das Gesetz zeigt sich bei Lautstärke, Helligkeit, Preis, Gewicht, Animationstiming und Kontrast.",
      es: "Ernst Weber (1834) y Gustav Fechner (1860) formalizaron la relación entre estímulo físico e intensidad percibida. El cambio detectable más pequeño no es una cantidad fija — es una proporción fija de lo que ya existe. La ley aparece en volumen, brillo, precio, peso, tiempos de animación y contraste.",
      ja: "エルンスト・ウェーバー（1834）とグスタフ・フェヒナー（1860）は、物理的刺激と知覚される強度の関係を定式化した。検知できる最小の変化は固定量ではなく、すでにある量に対する固定比率である。この法則は音量、明るさ、価格、重さ、アニメーションのタイミング、コントラストに現れる。",
      zh: "恩斯特·韦伯（1834）和古斯塔夫·费希纳（1860）formalized了物理刺激与感知强度的关系。可察觉的最小变化不是固定量——而是既有量的固定比例。这条定律出现在音量、亮度、价格、重量、动画时长和设计对比度中。" } },
    "yerkes-dodson": { tag: {
      fr: "La performance monte avec l'activation — jusqu'à un point — puis chute.", de: "Leistung steigt mit Erregung — bis zu einem Punkt — dann fällt sie.", es: "El rendimiento sube con la activación — hasta un punto — y luego cae.", ja: "パフォーマンスは覚醒とともに上がり——ある点を境に——下がる。", zh: "表现随唤醒度上升——到达顶点后——开始下降。" }, sub: {
      fr: "La découverte de Robert Yerkes et John Dodson (1908) : la performance s'améliore avec un niveau modéré de stress ou de stimulation, mais seulement jusqu'à un certain point. Au-delà, elle chute. La courbe est un U inversé — et les tâches complexes ont un optimum plus étroit que les simples.",
      de: "Der Befund von Robert Yerkes und John Dodson (1908): Leistung verbessert sich mit moderatem Stress oder Stimulation, aber nur bis zu einem Punkt. Danach fällt sie. Die Form ist ein umgekehrtes U — und komplexe Aufgaben haben ein engeres Optimum als einfache.",
      es: "El hallazgo de Robert Yerkes y John Dodson (1908): el rendimiento mejora con un nivel moderado de estrés o estimulación, pero solo hasta un punto. Pasado ese punto, cae. La forma es una U invertida — y las tareas complejas tienen un óptimo más estrecho que las simples.",
      ja: "1908年、ロバート・ヤーキーズとジョン・ドットソンの発見——適度なストレスや刺激はパフォーマンスを向上させるが、それはある点までのこと。それを超えると低下する。形は逆U字型で、複雑なタスクほど最適域は狭い。",
      zh: "罗伯特·耶基斯和约翰·多德森1908年的发现：适度的压力或刺激能提升任务表现，但仅到某个点为止。超过之后，表现下降。曲线呈倒U形——且复杂任务的最佳区间比简单任务更窄。" } },
    "pareto": { tag: {
      fr: "Environ 80 % des effets proviennent de 20 % des causes.", de: "Rund 80 Prozent der Wirkungen stammen aus 20 Prozent der Ursachen.", es: "Aproximadamente el 80 % de los efectos viene del 20 % de las causas.", ja: "結果の約8割は、2割の原因から生まれる。", zh: "大约80%的结果来自20%的原因。" }, sub: {
      fr: "Vilfredo Pareto a remarqué en 1906 que 80 % des terres d'Italie appartenaient à 20 % de sa population. Le motif se répète dans le logiciel, le support, la performance et la stratégie produit — l'essentiel de la valeur vient d'une petite fraction de l'effort. Savoir lequel des 20 % : tout est là.",
      de: "Vilfredo Pareto bemerkte 1906, dass 80 % des Landes in Italien 20 % der Menschen gehörten. Das Muster wiederholt sich in Software, Support, Performance und Produktstrategie — der Großteil des Werts kommt aus einem kleinen Teil des Inputs. Zu wissen, welche 20 %, ist das ganze Spiel.",
      es: "Vilfredo Pareto notó en 1906 que el 80 % de la tierra de Italia pertenecía al 20 % de su gente. El patrón se repite en software, soporte, rendimiento y estrategia de producto — la mayor parte del valor viene de una pequeña fracción del esfuerzo. Saber cuál 20 % es todo el juego.",
      ja: "1906年、ヴィルフレド・パレートはイタリアの土地の8割が2割の人々に所有されていることに気づいた。このパターンはソフトウェア、サポート、パフォーマンス、プロダクト戦略で繰り返される——価値の大半はごく一部の入力から生まれる。どの2割かを知ることがすべてだ。",
      zh: "维尔弗雷多·帕累托在1906年注意到意大利80%的土地属于20%的人。这一模式在软件、客服、性能和产品战略中不断重现——大部分价值来自一小部分投入。知道是哪20%，就是全部要义。" } },
    "choice-overload": { tag: {
      fr: "Quand plus d'options signifie moins de décisions.", de: "Wenn mehr Optionen weniger Entscheidungen bedeuten.", es: "Cuando más opciones significan menos decisiones.", ja: "選択肢が増えると、決定が減る。", zh: "选项越多，决定越少。" }, sub: {
      fr: "Plus d'options peut signifier moins de décisions. La recherche derrière la surcharge de choix — et les patterns qui aident à sortir de la paralysie décisionnelle.",
      de: "Mehr Optionen können weniger Entscheidungen bedeuten. Die Forschung hinter Choice Overload — und die Muster, die Menschen aus der Entscheidungslähmung führen.",
      es: "Más opciones puede significar menos decisiones. La investigación detrás de la sobrecarga de elección — y los patrones que sacan a la gente de la parálisis de decisión.",
      ja: "選択肢が増えると、かえって決定が減ることがある。選択過多の研究と、決定麻痺から人々を導くパターンを紹介する。",
      zh: "更多选项可能意味着更少决定。这里是选择过载背后的研究——以及帮助人们走出决策瘫痪的设计模式。" } },
    "power-law": { tag: {
      fr: "Le temps d'exécution d'une tâche décroît en puissance des répétitions.", de: "Die Zeit für eine Aufgabe sinkt als Potenz der Wiederholungen.", es: "El tiempo de una tarea cae como potencia de las repeticiones.", ja: "タスクの所要時間は、反復回数の冪乗で減少する。", zh: "完成任务的时间随重复次数呈幂律下降。" }, sub: {
      fr: "Snoddy (1926) l'a observé et Newell et Rosenbloom (1981) l'ont formalisé : à mesure qu'on répète une tâche, son temps suit une courbe en loi de puissance. Gains rapides au début, plus doux ensuite, et une longue traîne où la pratique paie encore — juste moins.",
      de: "Snoddy (1926) beobachtete es, Newell und Rosenbloom (1981) formalisierten es: Wiederholt man eine Aufgabe, folgt die Zeit einer Potenzkurve. Starke frühe Gewinne, sanftere später, und ein langer Schwanz, in dem Übung sich noch lohnt — nur weniger.",
      es: "Snoddy (1926) lo observó y Newell y Rosenbloom (1981) lo formalizaron: al repetir una tarea, el tiempo sigue una curva de ley de potencia. Ganancias fuertes al principio, más suaves después, y una larga cola donde la práctica aún paga — solo menos.",
      ja: "スノディ（1926）が観察し、ニューウェルとローゼンブルーム（1981）が定式化した——タスクを繰り返すほど、所要時間は冪法則の曲線に従って減る。序盤の急激な向上、その後の緩やかな改善、そして練習がまだ報われる長い尾。ただし、報酬は小さくなっていく。",
      zh: "斯诺迪（1926）观察到、纽厄尔和罗森布鲁姆（1981）formalized：随着任务的重复，所需时间遵循幂律曲线。早期收益显著，后期趋缓，长尾阶段练习仍有回报——只是越来越少。" } },
    "fogg": { tag: {
      fr: "Le comportement survient quand trois choses convergent au même moment.", de: "Verhalten entsteht, wenn drei Dinge im selben Moment zusammenkommen.", es: "La conducta ocurre cuando tres cosas convergen en el mismo momento.", ja: "行動は、3つの要素が同じ瞬間に揃ったときに起こる。", zh: "行为发生在三个要素同时汇聚的那一刻。" }, sub: {
      fr: "Le modèle de BJ Fogg (2009) : un comportement ne se produit que lorsque Motivation, Capacité et Déclencheur se rejoignent. Retirez-en un et l'action n'a pas lieu — même si les deux autres sont au maximum. Le modèle fonde le behavior design, la technologie persuasive et la méthode Tiny Habits.",
      de: "BJ Foggs Modell von 2009: Verhalten tritt nur auf, wenn Motivation, Fähigkeit und Auslöser zusammentreffen. Fehlt eines, passiert nichts — selbst wenn die anderen maximal sind. Das Modell ist die Grundlage von Behavior Design, persuasiver Technologie und der Tiny-Habits-Methode.",
      es: "El modelo de BJ Fogg (2009): una conducta ocurre solo cuando Motivación, Capacidad y Disparador coinciden. Quita uno y la acción no sucede — aunque los otros dos estén al máximo. El modelo es la base del diseño de conducta, la tecnología persuasiva y el método Tiny Habits.",
      ja: "BJフォッグの2009年のモデル——行動はモチベーション、能力、プロンプトが同時に揃ったときにのみ起こる。どれか一つを取り除けば、他の二つが最大でも行動は起こらない。このモデルは行動デザイン、説得的テクノロジー、タイニー・ハビットの基盤である。",
      zh: "BJ福格2009年的模型：只有当动机、能力和提示同时出现，行为才会发生。缺少任何一个，行动就不会发生——即使另外两个已达到最大值。该模型是行为设计、说服性技术和微习惯方法的基础。" } },
    "hook": { tag: {
      fr: "Déclencheur · Action · Récompense variable · Investissement.", de: "Auslöser · Aktion · Variable Belohnung · Investition.", es: "Disparador · Acción · Recompensa variable · Inversión.", ja: "トリガー · アクション · 変動報酬 · 投資。", zh: "触发 · 行动 · 多变奖励 · 投入。" }, sub: {
      fr: "Le cadre de Nir Eyal (2014) pour créer des produits générateurs d'habitudes. Quatre phases que l'utilisateur traverse, encore et encore, jusqu'à ce que le produit devienne un réflexe. Son livre suivant trace la ligne entre les hooks dont l'utilisateur est reconnaissant et ceux qu'il regrette.",
      de: "Nir Eyals Framework von 2014 für gewohnheitsbildende Produkte. Vier Phasen, die der Nutzer wieder und wieder durchläuft, bis das Produkt zum Reflex wird. Das Folgebuch zieht die Linie zwischen Hooks, für die Nutzer dankbar sind, und solchen, die sie bereuen.",
      es: "El marco de Nir Eyal (2014) para crear productos que forman hábitos. Cuatro fases que el usuario recorre, una y otra vez, hasta que el producto se vuelve un reflejo. Su siguiente libro traza la línea entre hooks que el usuario agradece y los que lamenta.",
      ja: "2014年、ニール・イヤールが提唱した習慣形成プロダクトのフレームワーク。ユーザーが繰り返し通過する4つのフェーズを経て、プロダクトは反射になる。続編の著書は、ユーザーが感謝するフックと後悔するフックの境界線を引いている。",
      zh: "尼尔·埃亚尔2014年提出的习惯养成产品框架。用户反复经历四个阶段，直到产品成为条件反射。他的后续著作划清了用户庆幸你构建的钩子与他们后悔的钩子之间的界线。" } },
    "gestalt": { tag: {
      fr: "Comment l'esprit regroupe ce qu'il voit.", de: "Wie der Geist gruppiert, was er sieht.", es: "Cómo la mente agrupa lo que ve.", ja: "心は見たものをどうグループ化するか。", zh: "心智如何组织所见之物。" }, sub: {
      fr: "L'esprit regroupe automatiquement ce qu'il voit. Ces dix principes de perception expliquent comment les gens lisent une structure dans une mise en page avant de lire un seul mot.",
      de: "Der Geist gruppiert automatisch, was er sieht. Diese zehn Wahrnehmungsprinzipien erklären, wie Menschen Struktur in ein Layout lesen, bevor sie ein einziges Wort lesen.",
      es: "La mente agrupa automáticamente lo que ve. Estos diez principios de percepción explican cómo la gente lee estructura en un diseño antes de leer una sola palabra.",
      ja: "心は見たものを自動的にグループ化する。この10の知覚原則は、人が一語も読む前にレイアウトから構造を読み取る仕組みを説明する。",
      zh: "心智会自动组织所见的一切。这十条知觉原则解释了人们如何在读懂一个字之前，先读出版面的结构。" } },
    "gutenberg": { tag: {
      fr: "Du haut-gauche au bas-droite.", de: "Von oben links nach unten rechts.", es: "De arriba-izquierda a abajo-derecha.", ja: "左上から右下へ。", zh: "从左上到右下。" }, sub: {
      fr: "Sur les pages au poids uniforme, l'œil balaie du haut-gauche au bas-droite. Le principe de Gutenberg cartographie cette gravité de lecture — et où placer ce qui compte.",
      de: "Auf gleichmäßig gewichteten Seiten schweift das Auge von oben links nach unten rechts. Das Gutenberg-Prinzip kartiert diese Leseschwerkraft — und wo das Wichtige hingehört.",
      es: "En páginas de peso uniforme, el ojo barre de arriba-izquierda a abajo-derecha. El principio de Gutenberg mapea esa gravedad de lectura — y dónde poner lo que importa.",
      ja: "要素の重みが均等なページでは、視線は左上から右下へと流れる。グーテンベルクの原則はこの「読みの重力」を地図化し、重要なものをどこに置くべきかを示す。",
      zh: "在视觉重量均匀的页面上，视线从左上扫向右下。古腾堡原则描绘了这种阅读重力——以及重要内容应放的位置。" } },
    "guidelines": { tag: {
      fr: "Comment les utilisateurs lisent vraiment votre interface.", de: "Wie Nutzer Ihr Interface wirklich lesen.", es: "Cómo leen realmente tu interfaz los usuarios.", ja: "ユーザーは実際どのように画面を読むのか。", zh: "用户究竟如何阅读你的界面。" }, sub: {
      fr: "Des décennies de recherche en oculométrie montrent que les gens ne lisent pas les interfaces — ils les balaient selon des formes prévisibles. Voici les six schémas et où chacun apparaît.",
      de: "Jahrzehnte der Eye-Tracking-Forschung zeigen: Menschen lesen Interfaces nicht — sie scannen sie in vorhersehbaren Formen. Hier sind die sechs Muster und wo jedes auftaucht.",
      es: "Décadas de investigación con eye-tracking muestran que la gente no lee las interfaces — las escanea en formas predecibles. Aquí están los seis patrones y dónde aparece cada uno.",
      ja: "数十年のアイトラッキング研究が示すのは、人はインターフェースを読まず、予測可能な形で走査するということ。ここでは6つのパターンと、それぞれが現れる場面を紹介する。",
      zh: "数十年的眼动研究表明，人们并不阅读界面——而是以可预测的形状扫视它。这里是六种扫描模式，以及它们各自出现的场景。" } },
    "dataviz": { tag: {
      fr: "Des graphiques qui communiquent vraiment.", de: "Diagramme, die wirklich kommunizieren.", es: "Gráficos que realmente comunican.", ja: "本当に伝わるチャート。", zh: "真正能传达信息的图表。" }, sub: {
      fr: "Seize types de graphiques regroupés par la question à laquelle ils répondent — comparaison, relation, distribution et composition. Choisissez le graphique qui correspond à la question, pas celui qui impressionne.",
      de: "Sechzehn Diagrammtypen, gruppiert nach der Frage, die sie beantworten — Vergleich, Beziehung, Verteilung und Zusammensetzung. Wählen Sie das Diagramm, das zur Frage passt, nicht das beeindruckendste.",
      es: "Dieciséis tipos de gráficos agrupados por la pregunta que responden — comparación, relación, distribución y composición. Elige el gráfico que encaja con la pregunta, no el que parece impresionante.",
      ja: "答える問いごとに分類された16のチャートタイプ——比較、関係、分布、構成。見栄えのするチャートではなく、問いに合ったチャートを選ぼう。",
      zh: "十六种图表类型，按它们回答的问题分组——比较、关系、分布和构成。选择匹配问题的图表，而不是看起来最炫的那个。" } },
    "grid": { tag: {
      fr: "L'échafaudage invisible.", de: "Das unsichtbare Gerüst.", es: "El andamiaje invisible.", ja: "見えない足場。", zh: "看不见的脚手架。" }, sub: {
      fr: "Les grilles organisent l'espace et la hiérarchie dirige l'attention. Ensemble, elles forment la couche silencieuse sous chaque interface bien résolue — la partie que les utilisateurs ne remarquent jamais quand elle est juste.",
      de: "Raster ordnen den Raum, Hierarchie lenkt die Aufmerksamkeit. Zusammen bilden sie die stille Ebene unter jedem gut aufgelösten Interface — den Teil, den Nutzer nie bemerken, wenn er stimmt.",
      es: "Las retículas organizan el espacio y la jerarquía dirige la atención. Juntas forman la capa silenciosa bajo cada interfaz bien resuelta — la parte que los usuarios nunca notan cuando está bien.",
      ja: "グリッドは空間を整え、階層は注意を導く。両者は、よく設計されたインターフェースの下にある静かな層をなす——正しくできているとき、ユーザーが決して気づかない部分だ。",
      zh: "网格组织空间，层级引导注意力。两者共同构成每个优秀界面之下的无声层——做对了，用户永远不会注意到的那部分。" } },
    "navigation": { tag: {
      fr: "Aidez les gens à savoir où ils sont, où ils peuvent aller et comment revenir.", de: "Hilf Menschen zu wissen, wo sie sind, wohin sie können und wie sie zurückkommen.", es: "Ayuda a la gente a saber dónde está, adónde puede ir y cómo volver.", ja: "今どこにいて、どこへ行けて、どう戻れるかを伝える。", zh: "让人们知道自己在哪、能去哪、怎么回来。" }, sub: {
      fr: "La navigation est le tissu conjonctif d'un produit. Chaque couche a un rôle différent — donnez-leur le bon poids et la structure devient invisible.",
      de: "Navigation ist das Bindegewebe eines Produkts. Jede Ebene hat eine andere Aufgabe — gibt man ihnen das richtige Gewicht, wird die Struktur unsichtbar.",
      es: "La navegación es el tejido conectivo de un producto. Cada capa hace un trabajo distinto — dales el peso correcto y la estructura se vuelve invisible.",
      ja: "ナビゲーションはプロダクトの結合組織である。各レイヤーは異なる役割を持つ——適切な重みを与えれば、構造は見えなくなる。",
      zh: "导航是产品的结缔组织。每一层承担不同的职责——赋予恰当的权重，结构就会隐于无形。" } },
    "icons": { tag: {
      fr: "Une poignée de glyphes que le monde entier sait déjà lire.", de: "Eine Handvoll Glyphen, die die ganze Welt schon liest.", es: "Un puñado de glifos que el mundo entero ya sabe leer.", ja: "世界中がすでに読める、ひと握りのグリフ。", zh: "全世界都已认得的一小组图形。" }, sub: {
      fr: "Un petit ensemble de glyphes est devenu un langage quasi universel. Utilisez-les tels qu'ils sont compris, associez-les à des libellés et gardez un seul jeu cohérent.",
      de: "Ein kleiner Satz von Glyphen ist zu einer fast universellen Sprache geworden. Verwenden Sie sie, wie sie verstanden werden, kombinieren Sie sie mit Beschriftungen und bleiben Sie bei einem konsistenten Satz.",
      es: "Un pequeño conjunto de glifos se ha vuelto un lenguaje casi universal. Úsalos como se entienden, acompáñalos de etiquetas y mantén un solo set consistente.",
      ja: "少数のグリフが、ほぼ世界共通の言語になった。理解されている通りに使い、ラベルを添え、一貫したセットを保とう。",
      zh: "一小组图形已成为近乎通用的语言。按人们理解的方式使用它们，配上文字标签，并保持一套一致的图标。" } },
    "nielsen": { tag: {
      fr: "Dix règles empiriques pour repérer ce qui cloche.", de: "Zehn Faustregeln, um Fehler zu erkennen.", es: "Diez reglas prácticas para detectar lo que falla.", ja: "問題を見つけるための10の経験則。", zh: "发现问题的十条经验法则。" }, sub: {
      fr: "Les dix heuristiques d'utilisabilité de Jakob Nielsen restent la liste la plus utilisée pour trouver les problèmes d'interface — chacune expliquée avec un exemple moderne et concret.",
      de: "Jakob Nielsens zehn Usability-Heuristiken sind noch immer die meistgenutzte Checkliste, um Interface-Probleme zu finden — jede mit einem modernen, praktischen Beispiel erklärt.",
      es: "Las diez heurísticas de usabilidad de Jakob Nielsen siguen siendo la lista más usada para encontrar problemas de interfaz — cada una explicada con un ejemplo moderno y práctico.",
      ja: "ヤコブ・ニールセンの10のユーザビリティヒューリスティクスは、今もインターフェースの問題発見に最も広く使われるチェックリストだ——それぞれを現代的で実践的な例とともに解説する。",
      zh: "雅各布·尼尔森的十大可用性启发式原则至今仍是发现界面问题最常用的清单——每一条都配有现代实用的示例。" } },
    "norman": { tag: {
      fr: "L'interface parle d'elle-même — ou elle ne fonctionne pas.", de: "Das Interface spricht für sich — oder es funktioniert nicht.", es: "La interfaz habla por sí misma — o no funciona.", ja: "インターフェースは自ら語る——さもなければ機能しない。", zh: "界面不言自明——否则就是失败的。" }, sub: {
      fr: "« The Design of Everyday Things » de Don Norman (1988) a posé un petit ensemble de principes devenus la fondation de l'IHM. Le postulat : un objet bien conçu vous dit ce qu'il fait, comment l'utiliser et si vous avez réussi — sans manuel.",
      de: "Don Normans \u201eThe Design of Everyday Things\u201c (1988) legte einen kleinen Satz von Prinzipien fest, die zur Grundlage der HCI wurden. Die Prämisse: Ein gut gestaltetes Objekt sagt Ihnen, was es tut, wie man es benutzt und ob es geklappt hat — ohne Handbuch.",
      es: "«The Design of Everyday Things» de Don Norman (1988) estableció un pequeño conjunto de principios que se volvieron la base de la HCI. La premisa: un objeto bien diseñado te dice qué hace, cómo usarlo y si lo lograste — sin manual.",
      ja: "ドン・ノーマンの『誰のためのデザイン？』（1988）は、HCIの基盤となる少数のデザイン原則を示した。前提はこうだ——良くデザインされたものは、何をするのか、どう使うのか、うまくいったのかを、説明書なしに教えてくれる。",
      zh: "唐·诺曼的《设计心理学》（1988）提出了一小组设计原则，成为人机交互的基石。前提是：设计良好的物品会告诉你它做什么、怎么用、是否成功——无需说明书。" } },
    "rams": { tag: {
      fr: "« Moins, mais mieux. »", de: "\u201eWeniger, aber besser.\u201c", es: "«Menos, pero mejor.»", ja: "「より少なく、しかしより良く。」", zh: "\u201c少，却更好。\u201d" }, sub: {
      fr: "Dieter Rams a écrit ces principes du bon design dans les années 1970 chez Braun. Cinquante ans plus tard, ils décrivent toujours ce qui rend un produit numérique authentiquement bon.",
      de: "Dieter Rams schrieb diese Prinzipien guten Designs in den 1970ern bei Braun. Fünfzig Jahre später beschreiben sie noch immer, was ein digitales Produkt wirklich gut macht.",
      es: "Dieter Rams escribió estos principios del buen diseño en los años 70 en Braun. Cincuenta años después, siguen describiendo lo que hace genuinamente bueno a un producto digital.",
      ja: "ディーター・ラムスは1970年代、ブラウン社でこの良いデザインの原則を書いた。50年経った今も、デジタルプロダクトを本当に良いものにする条件を言い当てている。",
      zh: "迪特·拉姆斯于1970年代在博朗写下这些好设计的原则。五十年后，它们依然定义着真正优秀的数字产品。" } },
    "tognazzini": { tag: {
      fr: "Seize règles de travail pour concevoir des logiciels qui respectent l'utilisateur.", de: "Sechzehn Arbeitsregeln für Software, die den Nutzer respektiert.", es: "Dieciséis reglas de trabajo para diseñar software que respeta al usuario.", ja: "ユーザーを尊重するソフトウェアのための16の実践則。", zh: "设计尊重用户的软件的十六条工作准则。" }, sub: {
      fr: "Les First Principles of Interaction Design de Bruce « Tog » Tognazzini, écrits et affinés sur AskTog.com au fil de décennies chez Apple, Sun et Nielsen Norman Group. Moins un catéchisme qu'un ensemble de règles de travail — chacune tirée de produits livrés et de patterns qui ont tenu à l'échelle.",
      de: "Bruce \u201eTog\u201c Tognazzinis First Principles of Interaction Design, über Jahrzehnte bei Apple, Sun und der Nielsen Norman Group auf AskTog.com geschrieben und verfeinert. Weniger Katechismus als Arbeitsregeln — jede aus ausgelieferten Produkten und skalierten Mustern gewonnen.",
      es: "Los First Principles of Interaction Design de Bruce «Tog» Tognazzini, escritos y refinados en AskTog.com durante décadas en Apple, Sun y Nielsen Norman Group. Menos un catecismo que un conjunto de reglas de trabajo — cada una ganada en productos entregados y patrones que escalaron.",
      ja: "ブルース・「トグ」・トグナッツィーニのインタラクションデザイン第一原則。Apple、Sun、ニールセン・ノーマン・グループでの数十年にわたり、AskTog.comで書かれ磨かれてきた。教理問答というより実践則の集まりで、どれも実際に出荷されたプロダクトとスケールしたパターンから得られたものだ。",
      zh: "布鲁斯·\u201c托格\u201d·托格纳齐尼的交互设计第一原则，在苹果、Sun和尼尔森诺曼集团工作的数十年间于AskTog.com上写就并打磨。与其说是教条，不如说是一套工作准则——每一条都来自真正交付的产品和经过规模验证的模式。" } },
    "wcag": { tag: {
      fr: "Perceptible · Utilisable · Compréhensible · Robuste", de: "Wahrnehmbar · Bedienbar · Verständlich · Robust", es: "Perceptible · Operable · Comprensible · Robusto", ja: "知覚可能 · 操作可能 · 理解可能 · 堅牢", zh: "可感知 · 可操作 · 可理解 · 健壮" }, sub: {
      fr: "L'accessibilité repose sur quatre principes — Perceptible, Utilisable, Compréhensible, Robuste. Voici ce que chacun signifie et les critères de succès que chaque équipe devrait connaître.",
      de: "Barrierefreiheit ruht auf vier Prinzipien — Wahrnehmbar, Bedienbar, Verständlich, Robust. Hier ist, was jedes bedeutet, und die Erfolgskriterien, die jedes Team kennen sollte.",
      es: "La accesibilidad descansa en cuatro principios — Perceptible, Operable, Comprensible, Robusto. Esto es lo que significa cada uno y los criterios de éxito que todo equipo debería conocer.",
      ja: "アクセシビリティは4つの原則の上に成り立つ——知覚可能、操作可能、理解可能、堅牢。それぞれの意味と、すべてのチームが知っておくべき達成基準を解説する。",
      zh: "无障碍建立在四大原则之上——可感知、可操作、可理解、健壮。这里解释每条原则的含义，以及每个团队都该了解的成功标准。" } },
    "about": { sub: {
      fr: "Qui fait ce site, et pourquoi il existe.", de: "Wer diese Website macht und warum es sie gibt.", es: "Quién hace este sitio y por qué existe.", ja: "このサイトを作っている人と、その理由。", zh: "谁在做这个网站，以及它为何存在。" } },
    "glossary": { sub: {
      fr: "Tous les termes utilisés sur UX Guidelines, en une référence alphabétique.", de: "Jeder Begriff auf UX Guidelines, in einer alphabetischen Referenz.", es: "Cada término usado en UX Guidelines, en una referencia alfabética.", ja: "UX Guidelinesで使われるすべての用語を、アルファベット順に。", zh: "UX Guidelines中使用的所有术语，按字母排序的完整参考。" } },
    "people": { sub: {
      fr: "Les chercheurs, designers et ingénieurs derrière chaque loi et principe de ce site.", de: "Die Forschenden, Designer und Ingenieure hinter jedem Gesetz und Prinzip auf dieser Website.", es: "Los investigadores, diseñadores e ingenieros detrás de cada ley y principio de este sitio.", ja: "このサイトのすべての法則と原則の背後にいる研究者、デザイナー、エンジニアたち。", zh: "本站每条定律与原则背后的研究者、设计师和工程师。" } },
    "sitemap": { sub: {
      fr: "Toutes les pages de UX Guidelines, groupées par section.", de: "Jede Seite auf UX Guidelines, nach Abschnitten gruppiert.", es: "Cada página de UX Guidelines, agrupada por sección.", ja: "UX Guidelinesの全ページを、セクションごとに。", zh: "UX Guidelines的所有页面，按栏目分组。" } }
  };

  const LANG_IDX = { fr: 0, de: 1, es: 2, ja: 3, zh: 4 };
  const lang = localStorage.getItem('ux-lang');
  if (!lang || !LANG_IDX.hasOwnProperty(lang)) return;
  const D = CHROME[lang];
  const idx = LANG_IDX[lang];
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const t = s => D[norm(s)];
  window.uxT = s => t(s);
  const title = s => { const row = TITLES[norm(s)]; return row ? row[idx] : undefined; };

  const apply = () => {
    document.documentElement.lang = lang;
    // chrome strings
    document.querySelectorAll('.related-label, .card .related a, .sheet-title, .sheet-label, .sheet-opt, .btn-save, .btn-cancel, .footer-head, .footer-col a, .feature-label, .menu-label, .menu-group-label h3, .menu-link, .cat-label, .gl-group h2, .pp-group h2, .about-section h2, .map-group h2, .meta .label, .ref-label, .eyeline, .category-label, .pt-desc, .view-tab, .yr-ctl, .theme-tab, .share-label, .bm-label, .bm-empty, .search-recent-label').forEach(el => {
      const tr = t(el.textContent) || title(el.textContent);
      if (tr) el.textContent = tr;
    });
    const si = document.querySelector('.search-input');
    if (si && D['Search']) si.placeholder = D['Search'];
    // page h1
    const h1 = document.querySelector('header h1');
    if (h1) { const tr = title(h1.textContent); if (tr) h1.textContent = tr; }
    // tagline + subtitle
    const page = document.documentElement.getAttribute('data-page') || (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
    const head = HEAD[page];
    if (head) {
      const tag = document.querySelector('header .tagline');
      const sub = document.querySelector('header .subtitle');
      if (tag && head.tag && head.tag[lang]) tag.textContent = head.tag[lang];
      if (sub && head.sub && head.sub[lang]) sub.textContent = head.sub[lang];
    }
    // document title + breadcrumb
    const parts = document.title.split(' — ');
    const trTitle = title(parts[0]);
    if (trTitle) {
      parts[0] = trTitle;
      document.title = parts.join(' — ');
    }
  };

  // Deep-content overlay: per-page translation files (i18n/<lang>/<page>.json).
  // Applied by selector + index; any selector whose element count doesn't match
  // the overlay falls back to English silently.
  const applyOverlay = data => {
    Object.entries(data).forEach(([sel, arr]) => {
      let els;
      try { els = document.querySelectorAll(sel); } catch (e) { return; }
      if (els.length !== arr.length) return;
      els.forEach((el, i) => { if (typeof arr[i] === 'string' && arr[i]) el.innerHTML = arr[i]; });
    });
  };
  const loadOverlay = () => {
    const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
    fetch('i18n/' + lang + '/' + page + '.json?v=19')
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (d) applyOverlay(d); })
      .catch(() => {});
  };
  const run = () => { apply(); loadOverlay(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
