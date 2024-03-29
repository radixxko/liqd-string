'use strict';

const LATIN = {"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};
const CYRILIC = {'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Ґ':'G','ґ':'g','Д':'D','д':'d','Е':'E','е':'e','Ё':'E','ё':'e','Є':'Ye','є':'ie','Ж':'Zh','ж':'zh','З':'Z','з':'z','И':'Y','и':'y','І':'I','і':'i','Ї':'Yi','ї':'i','Й':'Y','й':'i','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','У':'U','у':'u','Ф':'F','ф':'f','Х':'Kh','х':'kh','Ц':'Ts','ц':'ts','Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Shch','щ':'shch','Ы':'Y','ы':'y','Э':'E','э':'e','Ю':'Yu','ю':'iu','Я':'Ya','я':'ia','Ь':'','ь':'','Ъ':'','ъ':'',"'":''};
const GREEK = {"ΓΧ":"GX","γχ":"gx","ΤΘ":"T8","τθ":"t8","(θη|Θη)":"8h","ΘΗ":"8H","αυ":"au","Αυ":"Au","ΑΥ":"AY","ευ":"eu","εύ":"eu","εϋ":"ey","εΰ":"ey","Ευ":"Eu","Εύ":"Eu","Εϋ":"Ey","Εΰ":"Ey","ΕΥ":"EY","ου":"ou","ού":"ou","οϋ":"oy","οΰ":"oy","Ου":"Ou","Ού":"Ou","Οϋ":"Oy","Οΰ":"Oy","ΟΥ":"OY","Α":"A","α":"a","ά":"a","Ά":"A","Β":"B","β":"b","Γ":"G","γ":"g","Δ":"D","δ":"d","Ε":"E","ε":"e","έ":"e","Έ":"E","Ζ":"Z","ζ":"z","Η":"H","η":"h","ή":"h","Ή":"H","Θ":"TH","θ":"th","Ι":"I","Ϊ":"I","ι":"i","ί":"i","ΐ":"i","ϊ":"i","Ί":"I","Κ":"K","κ":"k","Λ":"L","λ":"l","Μ":"M","μ":"m","Ν":"N","ν":"n","Ξ":"KS","ξ":"ks","Ο":"O","ο":"o","Ό":"O","ό":"o","Π":"P","π":"p","Ρ":"R","ρ":"r","Σ":"S","σ":"s","Τ":"T","τ":"t","Υ":"Y","Ύ":"Y","Ϋ":"Y","ΰ":"y","ύ":"y","ϋ":"y","υ":"y","Φ":"F","φ":"f","Χ":"X","χ":"x","Ψ":"Ps","ψ":"ps","Ω":"w","ω":"w","Ώ":"w","ώ":"w","ς":"s",";":"?"};
const ENTITIES = { "amp":"&", "gt":">", "lt":"<", "quot":"\"", "apos":"'", "AElig":198, "Aacute":193, "Acirc":194, "Agrave":192, "Aring":197, "Atilde":195, "Auml":196, "Ccedil":199, "ETH":208, "Eacute":201, "Ecirc":202, "Egrave":200, "Euml":203, "Iacute":205, "Icirc":206, "Igrave":204, "Iuml":207, "Ntilde":209, "Oacute":211, "Ocirc":212, "Ograve":210, "Oslash":216, "Otilde":213, "Ouml":214, "THORN":222, "Uacute":218, "Ucirc":219, "Ugrave":217, "Uuml":220, "Yacute":221, "aacute":225, "acirc":226, "aelig":230, "agrave":224, "aring":229, "atilde":227, "auml":228, "ccedil":231, "eacute":233, "ecirc":234, "egrave":232, "eth":240, "euml":235, "iacute":237, "icirc":238, "igrave":236, "iuml":239, "ntilde":241, "oacute":243, "ocirc":244, "ograve":242, "oslash":248, "otilde":245, "ouml":246, "szlig":223, "thorn":254, "uacute":250, "ucirc":251, "ugrave":249, "uuml":252, "yacute":253, "yuml":255, "copy":169, "reg":174, "nbsp":160, "iexcl":161, "cent":162, "pound":163, "curren":164, "yen":165, "brvbar":166, "sect":167, "uml":168, "ordf":170, "laquo":171, "not":172, "shy":173, "macr":175, "deg":176, "plusmn":177, "sup1":185, "sup2":178, "sup3":179, "acute":180, "micro":181, "para":182, "middot":183, "cedil":184, "ordm":186, "raquo":187, "frac14":188, "frac12":189, "frac34":190, "iquest":191, "times":215, "divide":247, "OElig;":338, "oelig;":339, "Scaron;":352, "scaron;":353, "Yuml;":376, "fnof;":402, "circ;":710, "tilde;":732, "Alpha;":913, "Beta;":914, "Gamma;":915, "Delta;":916, "Epsilon;":917, "Zeta;":918, "Eta;":919, "Theta;":920, "Iota;":921, "Kappa;":922, "Lambda;":923, "Mu;":924, "Nu;":925, "Xi;":926, "Omicron;":927, "Pi;":928, "Rho;":929, "Sigma;":931, "Tau;":932, "Upsilon;":933, "Phi;":934, "Chi;":935, "Psi;":936, "Omega;":937, "alpha;":945, "beta;":946, "gamma;":947, "delta;":948, "epsilon;":949, "zeta;":950, "eta;":951, "theta;":952, "iota;":953, "kappa;":954, "lambda;":955, "mu;":956, "nu;":957, "xi;":958, "omicron;":959, "pi;":960, "rho;":961, "sigmaf;":962, "sigma;":963, "tau;":964, "upsilon;":965, "phi;":966, "chi;":967, "psi;":968, "omega;":969, "thetasym;":977, "upsih;":978, "piv;":982, "ensp;":8194, "emsp;":8195, "thinsp;":8201, "zwnj;":8204, "zwj;":8205, "lrm;":8206, "rlm;":8207, "ndash;":8211, "mdash;":8212, "lsquo;":8216, "rsquo;":8217, "sbquo;":8218, "ldquo;":8220, "rdquo;":8221, "bdquo;":8222, "dagger;":8224, "Dagger;":8225, "bull;":8226, "hellip;":8230, "permil;":8240, "prime;":8242, "Prime;":8243, "lsaquo;":8249, "rsaquo;":8250, "oline;":8254, "frasl;":8260, "euro;":8364, "image;":8465, "weierp;":8472, "real;":8476, "trade;":8482, "alefsym;":8501, "larr;":8592, "uarr;":8593, "rarr;":8594, "darr;":8595, "harr;":8596, "crarr;":8629, "lArr;":8656, "uArr;":8657, "rArr;":8658, "dArr;":8659, "hArr;":8660, "forall;":8704, "part;":8706, "exist;":8707, "empty;":8709, "nabla;":8711, "isin;":8712, "notin;":8713, "ni;":8715, "prod;":8719, "sum;":8721, "minus;":8722, "lowast;":8727, "radic;":8730, "prop;":8733, "infin;":8734, "ang;":8736, "and;":8743, "or;":8744, "cap;":8745, "cup;":8746, "int;":8747, "there4;":8756, "sim;":8764, "cong;":8773, "asymp;":8776, "ne;":8800, "equiv;":8801, "le;":8804, "ge;":8805, "sub;":8834, "sup;":8835, "nsub;":8836, "sube;":8838, "supe;":8839, "oplus;":8853, "otimes;":8855, "perp;":8869, "sdot;":8901, "lceil;":8968, "rceil;":8969, "lfloor;":8970, "rfloor;":8971, "lang;":9001, "rang;":9002, "loz;":9674, "spades;":9824, "clubs;":9827, "hearts;":9829, "diams;":9830 };
const ESCAPE_CHARS = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };
const REVERSED_ESCAPE_CHARS = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;', '&': '&amp;' };
const ALPHA_NUM_CHAR_RE = /^[A-Za-z0-9]+$/;

function escapeRegExp( re )
{
	return (''+re).split('').map( c => ALPHA_NUM_CHAR_RE.test(c) ? c : ( c === "\\000" ? "\\000" : "\\" + c )).join('');
}

module.exports = function( overload ) // if overload === undefined extend String
{
	const ExtendedString = ( overload !== undefined ? String : class ExtendedString extends String
	{
		constructor( str )
		{
			super( str || '' );
		}
	});

	const construct = ( overload !== undefined ? str => str : str => new ExtendedString( str ) );
	const prefix = overload || '';

	const defineFunction = ( name, callback ) =>
	{
		name = prefix + name;

		if( !String.prototype[name] )
		{
			ExtendedString.prototype[name] = callback;
		}
	};
	const defineProperty = ( name, handler ) =>
	{
		name = prefix + name;

		if( !Object.getOwnPropertyDescriptor(String.prototype, name) && !Object.hasOwnProperty(String, name) && !String.prototype[name] )
		{
			Object.defineProperty( ExtendedString.prototype, name, handler );
		}
	};

	defineFunction( 'inspect', function()
	{
		return '\'' + this + '\'';
	});

	defineFunction( 'between', function( left, right )
	{
		let startPos = this.indexOf( left ), endPos = right ? this.indexOf( right, startPos + left.length ) : this.length;

		return construct( startPos !== -1 && endPos !== -1 ? this.substring( startPos + left.length, endPos ) : '' );
	});

	defineFunction( 'camelize', function()
	{
		return construct( this.trim().replace(/(\-|_|\s)+(.)?/g, ( m, s, c ) => c ? c.toUpperCase() : '' ));
    });

	defineFunction( 'capitalize', function( lowercase = true )
	{
		return construct( this.substr(0, 1).toUpperCase() + ( lowercase ? this.substring(1).toLowerCase() : this.substring(1) ));
    });

	defineFunction( 'chompLeft', function( prefix )
	{
		return ( this.startsWith( prefix ) ? construct( this.substr( prefix.length )) : this );
    });

	defineFunction( 'chompRight', function( suffix )
	{
		return ( this.endsWith( suffix ) ? construct( this.substr( 0, this.length - suffix.length )) : this );
    });

	defineFunction( 'collapseWhitespace', function()
	{
		return construct( this.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '') );
    });

	defineFunction( 'contains', function( needle )
	{
		return this.includes( needle );
	});

	defineFunction( 'count', function( needle )
	{
		let count = 0, index = -1; while( ( index = this.indexOf( needle, index + 1 ) ) !== -1 ){ ++count; }

		return count;
	});

	defineFunction( 'dasherize', function( needle )
	{
		return construct( this.trim().replace(/[_/\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase() );
	});

	defineFunction( 'equalsIgnoreCase', function( str )
	{
		return this.toLowerCase() === str.toLowerCase();
  	});

	defineFunction( 'latinise', function()
	{
		return construct( this.replace( /[^A-Za-z0-9\[\] ]/g, c => LATIN[c] || CYRILIC[c] || GREEK[c] || c ));
  	});

	defineFunction( 'decodeHTMLEntities', function() //https://github.com/substack/node-ent/blob/master/index.js
	{
		return construct
		( this
			.replace( /&#(\d+);?/g, ( _, code ) => String.fromCharCode(code) )
			.replace( /&#[xX]([A-Fa-f0-9]+);?/g, ( _, hex ) => String.fromCharCode(parseInt(hex, 16)) )
      		.replace( /&([^;\W]+;?)/g, ( m, e ) =>
			{
				let t = ENTITIES[e] || (e.match(/;$/) && ENTITIES[e.replace(/;$/, '')]);
				return ( typeof t === 'number' ? String.fromCharCode(t) : ( typeof t === 'string' ? t : m ));
			})
		);
    });

	defineFunction( 'endsWithAny', function( ...suffixes )
	{
		return ( suffixes.find( suffix => this.endsWith( suffix )) !== undefined );
    });

	defineFunction( 'ensureLeft', function( prefix )
	{
		return this.startsWith( prefix ) ? this : construct( prefix + this );
	});

    defineFunction( 'ensureRight', function( suffix )
	{
		return this.endsWith( suffix ) ? this : construct( this + suffix );
	});

	defineFunction( 'escapeHTML', function()
	{
		return construct( this.replace(/[&<>"']/g, c => REVERSED_ESCAPE_CHARS[c] ));
    });

	defineFunction( 'humanize', function()
	{
		return construct( construct( this )[prefix+'underscore']().replace(/_id$/,'').replace(/_/g, ' ').trim() )[prefix+'capitalize']();
    });

	defineProperty( 'isAlpha', { get: function()
	{
		return !/[^a-z\xDF-\xFF]|^$/.test( this.toLowerCase() );
  	}});

    defineProperty( 'isAlphaNumeric', { get: function()
	{
		return !/[^0-9a-z\xDF-\xFF]/.test( this.toLowerCase() );
    }});

    defineProperty( 'isEmpty', { get: function()
	{
		return /^[\s\xa0]*$/.test( this );
    }});

    defineProperty( 'isLower', { get: function()
	{
		return this.isAlpha && this.toLowerCase().toString() === this.toString();
    }});

    defineProperty( 'isNumeric', { get: function()
	{
		return !/[^0-9]/.test( this );
    }});

    defineProperty( 'isUpper', { get: function()
	{
		return this.isAlpha && this.toUpperCase().toString() === this.toString();
    }});

	defineFunction( 'left', function( length )
	{
		return ( length >= 0 ? construct( this.substr( 0, length )) : this.right( -length ) );
    });

	defineFunction( 'lines', function( ignore_last_empty_line = true )
	{
		return this.replace(/[^\n]/g, '').length + ( ignore_last_empty_line && /\n\s*$/.test(this) ? 0 : 1 );
  	});

	defineFunction( 'pad', function( length, c )
	{
		return ( this.length < length ? construct(( c || ' ').repeat( Math.ceil(( length - this.length ) / 2 )) + this + ( c || ' ').repeat( Math.floor(( length - this.length ) / 2 ))) : this );
    });

	defineFunction( 'padLeft', function( length, c )
	{
		return ( this.length < length ? construct(( c || ' ').repeat( length - this.length ) + this ) : this );
    });

    defineFunction( 'padRight', function( length, c )
	{
		return ( this.length < length ? construct( this + ( c || ' ').repeat( length - this.length )) : this );
    });

	defineFunction( 'replaceAll', function( oldVal, newVal )
	{
		return construct( this.split( oldVal ).join( newVal ) );
  	});

	defineFunction( 'right', function( length )
	{
		return ( length >= 0 ? construct( this.substr( this.length - length )) : this[prefix+'left']( -length ));
    });

  	defineFunction( 'slugify', function()
  	{
  		return construct( construct( construct( this )[prefix+'latinise']().replace(/[^\w\s/-]/g, '').toLowerCase() )[prefix+'dasherize']().replace(/^\-+|\-+$/g, '' ));
	});

    /*defineFunction( 'splitLeft', function( separator, maxSplit, limit )
	{
		let split = this.split( separator );

      	return   require('./_splitLeft')(this.s, sep, maxSplit, limit)
    });

    splitRight: function(sep, maxSplit, limit) {
      return require('./_splitRight')(this.s, sep, maxSplit, limit)
  },*/

	defineFunction( 'startsWithAny', function( ...prefixes )
	{
		return ( prefixes.find( prefix => this.startsWith( prefix )) !== undefined );
	});

	defineFunction( 'strip', function( ...strings )
	{
		return construct( strings.reduce(( stripped, string ) => stripped.split( string ).join(''), this ));
	});

	defineFunction( 'stripLeft', function( chars )
	{
		return construct( this.replace( new RegExp('^['+( chars ? escapeRegExp(chars) : '\\s' )+']+', 'g'), '' ));
	});

	defineFunction( 'stripRight', function( chars )
	{
		return construct( this.replace( new RegExp('['+( chars ? escapeRegExp(chars) : '\\s' )+']+$', 'g'), '' ));
	});

	defineFunction( 'stripPunctuation', function()
	{
		return construct( this.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ' ));
  	});

    defineFunction( 'stripTags', function( ...tags )
	{
		return construct(( tags.length ? tags : ['']).reduce(( stripped, tag ) => stripped.replace( new RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '' ), this ));
    });

	defineFunction( 'titleCase', function()
	{
		return construct(( this.replace( /(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, w => w.toUpperCase() )));
    });

	defineFunction( 'toBool', function()
	{
		return [ 'true', 'yes', 'ok', 'on', '1' ].includes( this.toLowerCase() );
    });

	defineFunction( 'toFloat', function( precision = undefined, decimal_point = '.', thousands_separator = '', remove_whitespaces = false )
	{
		let value = this.trim();

		if( decimal_point !== '.' ){ value = value.split( decimal_point ).join('.'); }
		if( thousands_separator ){ value = value.split( thousands_separator ).join(''); }
		if( remove_whitespaces ){ value = value.replace( /\s/, '' ); }
		value = parseFloat( value );
		if( precision !== undefined ){ value = parseFloat( value.toFixed( precision )); }

		return value;
    });

	defineFunction( 'toInt', function( thousands_separator = '', remove_whitespaces = false )
	{
		let value = this.trim();

		if( thousands_separator ){ value = value.split( thousands_separator ).join(''); }
		if( remove_whitespaces ){ value = value.replace( /\s/, '' ); }

		return /^-?0x[0-9a-f]+/i.test( value ) ? parseInt( value, 16 ) : ( /^-?0b[01]+/i.test( value ) ? parseInt( value.replace(/^0b/i,''), 2 ) : parseInt( value, 10 ));
	});

	defineFunction( 'toBase64', function()
	{
		return construct( Buffer.from(this).toString('base64') );
	});

	defineFunction( 'fromBase64', function()
	{
		return construct( Buffer.from(this, 'base64').toString('utf8') );
	});

	defineFunction( 'truncate', function( length, prune = '...' )
	{
		return ( this.length > length ? this.substr( 0, length - prune.length - ( /[\s.?!_:(){}\[\]\-]/.test( this.charAt(length - prune.length)) ? this.substr( 0, length - prune.length ).match(/[\s]*$/)[0].length : this.substr( 0, length - prune.length ).match(/[^\s.?!_:(){}\[\]\-]*$/)[0].length + 1 ) ) + prune : this );
	});

	defineFunction( 'underscore', function()
	{
		return construct( this.trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g,'$1_$2').replace(/[-\s]+/g, '_').toLowerCase() );
    });

	defineFunction( 'unescapeHTML', function()
	{
		return construct( this.replace( /\&([^;]+);/g, ( e, ec ) =>
		{
			let match; return (
				ESCAPE_CHARS[ec] ||
				(( match = ec.match(/^#x([\da-fA-F]+)$/)) && String.fromCharCode(parseInt(match[1], 16)) ) ||
				(( match = ec.match(/^#(\d+)$/)) && String.fromCharCode(~~match[1]) ) ||
				e );
      	}));
    });

	return ( str ) => new ExtendedString( str );
}
