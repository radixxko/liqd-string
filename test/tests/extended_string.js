'use strict';

const assert = require('assert' );

require('../../lib/string')('test_');
const ExStr = require('../../lib/string')();

describe('- between(left, right)', function()
{
	it('should extract string between `left` and `right`', function()
	{
		assert.strictEqual( ExStr('<a>foo</a>').between('<a>', '</a>').toString(), 'foo' );
		assert.strictEqual( ExStr('<a>foo</a></a>').between('<a>', '</a>').toString(), 'foo' );
		assert.strictEqual( ExStr('<a><a>foo</a></a>').between('<a>', '</a>').toString(), '<a>foo' );
		assert.strictEqual( ExStr('<a>foo').between('<a>', '</a>').toString(), '' );
		assert.strictEqual( ExStr('Some strings } are very {weird}, dont you think?').between('{', '}').toString(), 'weird' );
		assert.strictEqual( ExStr('This is a test string').between('test').toString(), ' string' );
		assert.strictEqual( ExStr('This is a test string').between('', 'test').toString(), 'This is a ' );
	});
});

describe('- camelize()', function()
{
	it('should remove any underscores or dashes and convert a string into camel casing', function()
	{
		assert.ok( ExStr('data_rate').camelize().toString() === 'dataRate' );
		assert.ok( ExStr('background-color').camelize().toString() === 'backgroundColor' );
		assert.ok( ExStr('-moz-something').camelize().toString() === 'MozSomething' );
		assert.ok( ExStr('_car_speed_').camelize().toString() === 'CarSpeed' );
		assert.ok( ExStr('yes_we_can').camelize().toString() === 'yesWeCan' );
	});
});

describe('- capitalize()', function()
{
	it('should capitalize the string', function()
	{
		assert.ok( ExStr('jon').capitalize().toString() === 'Jon' );
		assert.ok( ExStr('JP').capitalize().toString() === 'Jp' );
		assert.ok( ExStr('john Doe').capitalize(false).toString() === 'John Doe' );
	});
});

describe('- charAt(index)', function()
{
	it('should return a native JavaScript string with the character at the specified position', function()
	{
		assert.ok( ExStr('hi').charAt(1).toString() === 'i' );
	});
});

describe('- chompLeft(prefix)', function()
{
	it('should remove `prefix` from start of string', function()
	{
		assert.ok( ExStr('foobar').chompLeft('foo').toString() === 'bar' );
		assert.ok( ExStr('foobar').chompLeft('bar').toString() === 'foobar' );
		assert.ok( ExStr('').chompLeft('foo').toString() === '' );
		assert.ok( ExStr('').chompLeft('').toString() === '' );
	});
});

describe('- chompRight(suffix)', function()
{
	it('should remove `suffix` from end of string', function()
	{
		assert.ok( ExStr('foobar').chompRight('foo').toString() === 'foobar' );
		assert.ok( ExStr('foobar').chompRight('bar').toString() === 'foo' );
		assert.ok( ExStr('').chompRight('foo').toString() === '' );
		assert.ok( ExStr('').chompRight('').toString() === '' );
	});
});

describe('- collapseWhitespace()', function()
{
	it('should convert all adjacent whitespace characters to a single space and trim the ends', function()
	{
		assert.ok( ExStr('  Strings   \t are   \n\n\t fun\n!  ').collapseWhitespace().toString() === 'Strings are fun !' );
	});
});

describe('- containsubstring)', function()
{
	it('should return true if the string contains the specified input string', function()
	{
		assert.ok( ExStr('JavaScript is one of the best languages!').contains('one') );
		assert.ok( !( ExStr('What do you think?').contains('YES!') ) );
	});
});

describe('- count(substring)', function()
{
	it('should return the count of all substrings', function()
	{
		assert.strictEqual( ExStr('JP likes to program. JP does not play in the NBA.').count("JP"), 2 );
		assert.strictEqual( ExStr('Does not exist.').count("Flying Spaghetti Monster"), 0 );
		assert.strictEqual( ExStr('Does not exist.').count("Bigfoot"), 0 );
		assert.strictEqual( ExStr('JavaScript is fun, therefore Node.js is fun').count("fun"), 2 );
		assert.strictEqual( ExStr('funfunfun').count("fun"), 3 );
	});
});

describe('- equalsIgnoreCase()', function()
{
	it('should be equal', function()
	{
		assert.ok( ExStr('jon').equalsIgnoreCase('Jon') );
		assert.ok( ExStr('Jon').equalsIgnoreCase('jon') );
		assert.ok( ExStr('jon').equalsIgnoreCase('jon') );
		assert.ok( ExStr('Jon').equalsIgnoreCase('Jon') );
	});

	it('should not be equal', function()
	{
		assert.ok( !( ExStr('John').equalsIgnoreCase('Jon') ) );
	});
});

describe('- dasherize()', function()
{
	it('should convert a camel cased string into a string delimited by dashes', function()
	{
		assert.ok( ExStr('dataRate').dasherize().toString() === 'data-rate' );
		assert.ok( ExStr('CarSpeed').dasherize().toString() === '-car-speed' );
		assert.ok( ExStr('yesWeCan').dasherize().toString() === 'yes-we-can' );
		assert.ok( ExStr('backgroundColor').dasherize().toString() === 'background-color' );
	});
});

describe('- decodeHTMLEntities', function()
{
	it('should decode HTML entities into their proper string representation', function()
	{
		assert.strictEqual( ExStr('Ken Thompson &amp; Dennis Ritchie').decodeHTMLEntities().toString(), 'Ken Thompson & Dennis Ritchie' );
		assert.strictEqual( ExStr('3 &lt; 4').decodeHTMLEntities().toString(), '3 < 4' );
		assert.strictEqual( ExStr('http:&#47;&#47;').decodeHTMLEntities().toString(), 'http://' );
		assert.strictEqual( ExStr('105&#x20AC;').decodeHTMLEntities().toString(), '105€' );
		assert.strictEqual( ExStr('105&#8364;').decodeHTMLEntities().toString(), '105€' );
		assert.strictEqual( ExStr('&Aacute;').decodeHTMLEntities().toString(), 'Á' );
		assert.strictEqual( ExStr('&foobar;').decodeHTMLEntities().toString(), '&foobar;' );
	});
});

describe('- endsWith(suffix1[, suffix2, ..])', function()
{
	it("should return true if the string ends with the input string", function()
	{
		assert.ok( ExStr("hello jon").endsWith('jon') );
		assert.ok( ExStr("hello jon").endsWithAny('jon') );
		assert.ok( !(ExStr('ffffaaa').endsWith('jon') ) );
		assert.ok( ExStr("").endsWith('') );
		assert.ok( ExStr("hi").endsWith('') );
		assert.ok( ExStr("hi").endsWith('hi') );
		assert.ok( ExStr("test.jpeg").endsWithAny('png', 'jpg', 'jpeg') );
		assert.ok( ExStr("Chunky Bacon").endsWith('') );
		assert.ok( !( ExStr("Chunky Bacon").endsWithAny("nk", "aco") ) );
	});
});

describe('- ensureLeft(prefix)', function()
{
	it('should prepend `prefix` if string does not start with prefix', function()
	{
		assert.ok( ExStr('foobar').ensureLeft('foo').toString() === 'foobar' );
		assert.ok( ExStr('bar').ensureLeft('foo').toString() === 'foobar' );
		assert.ok( ExStr('').ensureLeft('foo').toString() === 'foo' );
		assert.ok( ExStr('').ensureLeft('').toString() === '' );
	});
});

describe('- ensureRight(suffix)', function()
{
	it('should append `suffix` if string does not end with suffix', function()
	{
		assert.ok( ExStr('foobar').ensureRight('bar').toString() === 'foobar' );
		assert.ok( ExStr('foo').ensureRight('bar').toString() === 'foobar' );
		assert.ok( ExStr('').ensureRight('foo').toString() === 'foo' );
		assert.ok( ExStr('').ensureRight('').toString() === '' );
	});
});

describe('- escapeHTML()', function()
{
	it('should escape the html', function()
	{
		assert.ok( ExStr('<div>Blah & "blah" & \'blah\'</div>').escapeHTML().toString() === '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&apos;&lt;/div&gt;' );
		assert.ok( ExStr('&lt;').escapeHTML().toString() === '&amp;lt;' );
	});
});

describe('- humanize()', function()
{
	it('should humanize the string', function()
	{
		assert.strictEqual( ExStr('the_humanize_string_method').humanize().toString(), 'The humanize string method' );
		assert.strictEqual( ExStr('ThehumanizeStringMethod').humanize().toString(), 'Thehumanize string method' );
		assert.strictEqual( ExStr('the humanize string method').humanize().toString(), 'The humanize string method' );
		assert.strictEqual( ExStr('the humanize_id string method_id').humanize().toString(), 'The humanize id string method' );
		assert.strictEqual( ExStr('the  humanize string method  ').humanize().toString(), 'The humanize string method' );
		assert.strictEqual( ExStr('   capitalize dash-CamelCase_underscore trim  ').humanize().toString(), 'Capitalize dash camel case underscore trim' );
		assert.strictEqual( ExStr('123').humanize().toString(), '123' );
		assert.strictEqual( ExStr('').humanize().toString(), '' );
	});
});

describe('- includes substring', function()
{
	it('should return true if the string contains the specified input string', function()
	{
		assert.ok( ExStr('JavaScript is one of the best languages!').includes('one') );
		assert.ok( !(ExStr('What do you think?').includes('YES!') ));
	});
});

describe('- isAlpha', function()
{
	it("should return true if the string contains only letters", function()
	{
		assert.ok( ExStr("afaf").isAlpha );
		assert.ok( ExStr("FJslfjkasfs").isAlpha );
		assert.ok( ExStr("áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ").isAlpha );
		assert.ok( !(ExStr("adflj43faljsdf").isAlpha ));
		assert.ok( !(ExStr("33").isAlpha ));
		assert.ok( !(ExStr("TT....TTTafafetstYY").isAlpha ));
		assert.ok( !(ExStr("-áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ").isAlpha ));
		assert.ok( !(ExStr("").isAlpha ));
	});
});

describe('- isAlphaNumeric', function()
{
	it("should return true if the string contains only letters and digits", function()
	{
		assert.ok( ExStr("afaf35353afaf").isAlphaNumeric );
		assert.ok( ExStr("FFFF99fff").isAlphaNumeric );
		assert.ok( ExStr("99").isAlphaNumeric );
		assert.ok( ExStr("afff").isAlphaNumeric );
		assert.ok( ExStr("Infinity").isAlphaNumeric );
		assert.ok( ExStr("áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ1234567890").isAlphaNumeric );
		assert.ok( !(ExStr("-Infinity").isAlphaNumeric ));
		assert.ok( !(ExStr("-33").isAlphaNumeric ));
		assert.ok( !(ExStr("aaff..").isAlphaNumeric ));
		assert.ok( !(ExStr(".áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ1234567890").isAlphaNumeric ));
	});
});

describe('- isEmpty', function()
{
	it('should return true if the string is solely composed of whitespace or is null', function()
	{
		assert.ok( ExStr(' ').isEmpty );
		assert.ok( ExStr('\t\t\t    ').isEmpty );
		assert.ok( ExStr('\n\n ').isEmpty );
		assert.ok( !(ExStr('hey').isEmpty ));
	});
});

describe('- isLower', function()
{
	it('should return true if the character or string is lowercase', function()
	{
		assert.ok( ExStr('a').isLower );
		assert.ok( ExStr('z').isLower );
		assert.ok( !(ExStr('B').isLower ));
		assert.ok( ExStr('hijp').isLower );
		assert.ok( ExStr('áéúóúãõàèìòùâêîôûäëïöüç').isLower );
		assert.ok( ExStr('áéúóúãõàèìòùâêîôûäëïöüça').isLower );
		assert.ok( !(ExStr('hi jp').isLower ));
		assert.ok( !(ExStr('HelLO').isLower ));
		assert.ok( !(ExStr('ÁÉÍÓÚÃÕÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇ').isLower ));
		assert.ok( !(ExStr('áéúóúãõàèìòùâêîôûäëïöüçÁ').isLower ));
		assert.ok( !(ExStr('áéúóúãõàèìòùâêîôû äëïöüç').isLower ));
	});
});

describe('- isNumeric', function()
{
	it("should return true if the string only contains digits, this would not include Infinity or -Infinity", function()
	{
		assert.ok( ExStr("3").isNumeric );
		assert.ok( !(ExStr("34.22").isNumeric ));
		assert.ok( !(ExStr("-22.33").isNumeric ));
		assert.ok( !(ExStr("NaN").isNumeric ));
		assert.ok( !(ExStr("Infinity").isNumeric ));
		assert.ok( !(ExStr("-Infinity").isNumeric ));
		assert.ok( !(ExStr("JP").isNumeric ));
		assert.ok( !(ExStr("-5").isNumeric ));
		assert.ok( ExStr("000992424242").isNumeric );
	});
});

describe('- isUpper', function()
{
	it('should return true if the character or string is uppercase', function()
	{
		assert.ok( !('a'.isUpper ));
		assert.ok( !('z'.isUpper ));
		assert.ok( ExStr('B').isUpper );
		assert.ok( ExStr('HIJP').isUpper );
		assert.ok( ExStr('ÁÉÍÓÚÃÕÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇ').isUpper );
		assert.ok( !('HI JP'.isUpper ));
		assert.ok( !('HelLO'.isUpper ));
		assert.ok( !('áéúóúãõàèìòùâêîôûäëïöüç'.isUpper ));
		assert.ok( !('áéúóúãõàèìòùâêîôûäëïöüçÁ'.isUpper ));
		assert.ok( !('ÁÉÍÓÚÃÕÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇá'.isUpper ));
	});
});

describe('- latinise', function()
{
	it('should remove diacritics from Latin characters', function()
	{
		assert.ok( ExStr('crème brûlée').latinise().toString() === 'creme brulee' );
		assert.ok( ExStr('CRÈME BRÛLÉE').latinise().toString() === 'CREME BRULEE' );
		assert.ok( ExStr('Příliš žluťoučký kůň úpěl ďábelské ódy').latinise().toString() === 'Prilis zlutoucky kun upel dabelske ody' );
		assert.ok( ExStr('chinese 中英字典 YellowBridge').latinise().toString() === 'chinese 中英字典 YellowBridge' );
	});
});

describe('- length', function()
{
	it('should return the length of the string', function()
	{
		assert.ok( ExStr('hello').length === 5 );
		assert.ok( ExStr('').length === 0 );
	});
});

describe('- left(N)', function()
{
	it('should return the substring denoted by N positive left-most characters', function()
	{
		assert.ok( ExStr('My name is JP').left(2).toString() === 'My' );
		assert.ok( ExStr('Hi').left(0).toString() === '' );
		assert.ok( ExStr('Hello').left(1).toString() === 'H' );
	});

	it('should return the substring denoted by N negative left-most characters, equivalent to calling right(-N)', function()
	{
		assert.ok( ExStr('My name is JP').left(-2).toString() === 'JP' );
	});
});

describe('- pad(len, [char])', function()
{
	it('should pad the string in the center with specified character', function()
	{
		assert.ok( ExStr('hello').pad(5).toString() === 'hello' );
		assert.ok( ExStr('hello').pad(10).toString() === '   hello  ' );
		assert.ok( ExStr('hey').pad(7).toString() === '  hey  ' );
		assert.ok( ExStr('hey').pad(5).toString() === ' hey ' );
		assert.ok( ExStr('hey').pad(4).toString() === ' hey' );
		assert.ok( ExStr('hey').pad(7, '-').toString() === '--hey--' );
	});

	it('should work on numbers', function()
	{
		assert.ok( ExStr((1234).toString()).pad(4, '0').toString() === '1234' );
		assert.ok( ExStr((1234).toString()).pad(7, '0').toString() === '0012340' );
		assert.ok( ExStr((1234).toString()).pad(7, '1').toString() === '1112341' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( ExStr('hello').pad(5, null).toString() === 'hello' );
		assert.ok( ExStr('hello').pad(10, null).toString() === '   hello  ' );
	});
});

describe('- padLeft(len, [char])', function()
{
	it('should left pad the string', function()
	{
		assert.ok( ExStr('hello').padLeft(5).toString() === 'hello' );
		assert.ok( ExStr('hello').padLeft(10).toString() === '     hello' );
		assert.ok( ExStr('hello').padLeft(7).toString() === '  hello' );
		assert.ok( ExStr('hello').padLeft(6).toString() === ' hello' );
		assert.ok( ExStr('hello').padLeft(10, '.').toString() === '.....hello' );
	});

	it('should work on numbers', function()
	{
		assert.ok( ExStr((1234).toString()).padLeft(4, '0').toString() === '1234' );
		assert.ok( ExStr((1234).toString()).padLeft(7, '0').toString() === '0001234' );
		assert.ok( ExStr((1234).toString()).padLeft(7, '1').toString() === '1111234' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( ExStr('hello').padLeft(5, null).toString() === 'hello' );
		assert.ok( ExStr('hello').padLeft(10, null).toString() === '     hello' );
	});
});

describe('- padRight(len, [char])', function()
{
	it('should right pad the string', function()
	{
		assert.ok( ExStr('hello').padRight(5).toString() === 'hello' );
		assert.ok( ExStr('hello').padRight(10).toString() === 'hello     ' );
		assert.ok( ExStr('hello').padRight(7).toString() === 'hello  ' );
		assert.ok( ExStr('hello').padRight(6).toString() === 'hello ' );
		assert.ok( ExStr('hello').padRight(10, '.').toString() === 'hello.....' );
	});

	it('should work on numbers', function()
	{
		assert.ok( ExStr((1234).toString()).padRight(4, '0').toString() === '1234' );
		assert.ok( ExStr((1234).toString()).padRight(7, '0').toString() === '1234000' );
		assert.ok( ExStr((1234).toString()).padRight(7, '1').toString() === '1234111' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( ExStr('hello').padRight(5, null).toString() === 'hello' );
		assert.ok( ExStr('hello').padRight(10, null).toString() === 'hello     ' );
	});
});

/*
describe('- parseCSV([delim],[qualifier],[escape],[lineDelimiter])', function() {
  it('should parse a CSV line into an array', function() {
    ARY_assert.strictEqual( "'a','b','c'").parseCSV(',', "'"), ['a', 'b', 'c'])
    ARY_assert.strictEqual( ExStr('"a","b","c"')).parseCSV(), ['a', 'b', 'c'])
    ARY_assert.strictEqual( ExStr('a,b,c')).parseCSV(',', null), ['a', 'b', 'c'])
    ARY_assert.strictEqual( "'a,','b','c'").parseCSV(',', "'"), ['a,', 'b', 'c'])
    ARY_assert.strictEqual( ExStr('"a","b",4,"c"')).parseCSV(',', null), ['"a"', '"b"', '4', '"c"'])
    ARY_assert.strictEqual( ExStr('"a","b","4","c"')).parseCSV(), ['a', 'b', '4', 'c'])
    ARY_assert.strictEqual( ExStr('"a","b",       "4","c"')).parseCSV(), ['a', 'b', '4', 'c'])
    ARY_assert.strictEqual( ExStr('"a","b",       4,"c"')).parseCSV(",", null), [ '"a"', '"b"', '       4', '"c"' ])
    ARY_assert.strictEqual( ExStr('"a","b\\"","d","c"')).parseCSV(), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( ExStr('"jp","really\tlikes to code"')).parseCSV(), ['jp', 'really\tlikes to code'])
    ARY_assert.strictEqual( ExStr('"a","b+"","d","c"')).parseCSV(",", "\"", "+"), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( ExStr('"a","b""","d","c"')).parseCSV(",", "\"", "\""), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( ExStr('"a","","c"')).parseCSV(), ['a', '', 'c'])
    ARY_assert.strictEqual( ExStr('"","b","c"')).parseCSV(), ['', 'b', 'c'])
    ARY_assert.strictEqual( "'a,',b,'c'").parseCSV(',', "'"), ['a,', 'b', 'c'])

    var lines = ('"a\na","b","c"\n"a", """b\nb", "a"').parseCSV(',', '"', '"', '\n') );
    ARY_EQ(lines[0], [ 'a\na', 'b', 'c' ]);
    ARY_EQ(lines[1], [ 'a', '"b\nb', 'a' ]);
  })
})*/

describe('- lines', function()
{
	it('should count number of lines', function()
	{
		assert.ok( ExStr('a \nb\r\nc\rd\td\ne').lines() === 4 );
		assert.ok( ExStr('a \nb\r\nc\rd\td\n').lines() === 3 );

		assert.ok( ExStr('a \nb\r\nc\rd\td\ne').lines(false) === 4 );
		assert.ok( ExStr('a \nb\r\nc\rd\td\n').lines(false) === 4 );
	});
});

describe('- repeat(n)', function()
{
	it('should return the string concatenated with itself n times', function()
	{
		assert.ok( ExStr(' ').repeat(5).toString() === '     ' );
		assert.ok( ExStr('*').repeat(3).toString() === '***' );
		assert.ok( ExStr('ab').repeat(3).toString() === 'ababab' );
		assert.ok( ExStr('ab ').repeat(3).toString() === 'ab ab ab ' );
	});
});

describe('- replaceAll(substring, replacement)', function()
{
	it('should return the new string with all occurrences of substring replaced with the replacment string', function()
	{
		assert.ok( ExStr(' does IT work? ').replaceAll(' ', '_').toString() === '_does_IT_work?_' );
		assert.ok( ExStr('Yes it does!').replaceAll(' ', '').toString() === 'Yesitdoes!' );
		assert.ok( ExStr('lalala.blabla').replaceAll('.', '_').toString() === 'lalala_blabla' );
		var e = '\\', q = '"';
		var r = e + q;
		assert.ok( ExStr('a').replaceAll(q, r).toString() === 'a' );
	});
});
/*
describe('- splitLeft(sep, [maxSplit, [limit]])', function() {
  it('should return an array of strings, split from the left at sep, at most maxSplit splits, at most limit elements', function() {
    // by a char
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|'))
    ARY_assert.strictEqual( ['a', 'b|c|d'], 'a|b|c|d')plitLeft('|', 1))
    ARY_assert.strictEqual( ['a', 'b', 'c|d'], 'a|b|c|d')plitLeft('|', 2))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 1000))
    ARY_assert.strictEqual( ['a|b|c|d'], 'a|b|c|d')plitLeft('|', 0))
    ARY_assert.strictEqual( ['a', '', 'b||c||d'], 'a||b||c||d')plitLeft('|', 2))
    ARY_assert.strictEqual( ['', ' begincase'], '| begincase')plitLeft('|'))
    ARY_assert.strictEqual( ['endcase ', ''], 'endcase |')plitLeft('|'))
    ARY_assert.strictEqual( ['', 'bothcase', ''], '|bothcase|')plitLeft('|'))

    ARY_assert.strictEqual( ['a', 'b', 'c\x00\x00d'], 'a\x00b\x00c\x00\x00d')plitLeft('\x00', 2))

    // by string
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitLeft('//'))
    ARY_assert.strictEqual( ['a', 'b//c//d'], 'a//b//c//d')plitLeft('//', 1))
    ARY_assert.strictEqual( ['a', 'b', 'c//d'], 'a//b//c//d')plitLeft('//', 2))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitLeft('//', 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitLeft('//', 4))
    ARY_assert.strictEqual( ['a//b//c//d'], 'a//b//c//d')plitLeft('//', 0))
    ARY_assert.strictEqual( ['a', '', 'b////c////d'], 'a////b////c////d')plitLeft('//', 2)) // overlap
    ARY_assert.strictEqual( ['', ' begincase'], 'test begincase')plitLeft('test'))
    ARY_assert.strictEqual( ['endcase ', ''], 'endcase test')plitLeft('test'))
    ARY_assert.strictEqual( ['', ' bothcase ', ''], 'test bothcase test')plitLeft('test'))
    ARY_assert.strictEqual( ['a', 'bc'], 'abbbc')plitLeft('bb'))
    ARY_assert.strictEqual( ['', ''], 'aaa')plitLeft('aaa'))
    ARY_assert.strictEqual( ['aaa'], 'aaa')plitLeft('aaa', 0))
    ARY_assert.strictEqual( ['ab', 'ab'], 'abbaab')plitLeft('ba'))
    ARY_assert.strictEqual( ['aaaa'], 'aaaa')plitLeft('aab'))
    ARY_assert.strictEqual( [''], '')plitLeft('aaa'))
    ARY_assert.strictEqual( ['aa'], 'aa')plitLeft('aaa'))
    ARY_assert.strictEqual( ['A', 'bobb'], 'Abbobbbobb')plitLeft('bbobb'))
    ARY_assert.strictEqual( ['', 'B', 'A'], 'bbobbBbbobbA')plitLeft('bbobb'))

    // with limit
    ARY_assert.strictEqual( ['a'], 'a|b|c|d')plitLeft('|', 3, 1))
    ARY_assert.strictEqual( ['a', 'b', 'c'], 'a|b|c|d')plitLeft('|', 3, 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3, 4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3, 5))

    ARY_assert.strictEqual( ['d'], 'a|b|c|d')plitLeft('|', 3, -1))
    ARY_assert.strictEqual( ['b', 'c|d'], 'a|b|c|d')plitLeft('|', 2, -2))
    ARY_assert.strictEqual( ['b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3, -3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3, -4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitLeft('|', 3, -5))

  })
})

describe('- splitRight(sep, [maxSplit, [limit]])', function() {
  it('should return an array of strings, split from the right at sep, at most maxSplit splits, at most limit elements', function() {
    // by a char
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|'))
    ARY_assert.strictEqual( ['a|b|c', 'd'], 'a|b|c|d')plitRight('|', 1))
    ARY_assert.strictEqual( ['a|b', 'c', 'd'], 'a|b|c|d')plitRight('|', 2))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 1000))
    ARY_assert.strictEqual( ['a|b|c|d'], 'a|b|c|d')plitRight('|', 0))
    ARY_assert.strictEqual( ['a||b||c', '', 'd'], 'a||b||c||d')plitRight('|', 2))
    ARY_assert.strictEqual( ['', ' begincase'], '| begincase')plitRight('|'))
    ARY_assert.strictEqual( ['endcase ', ''], 'endcase |')plitRight('|'))
    ARY_assert.strictEqual( ['', 'bothcase', ''], '|bothcase|')plitRight('|'))

    ARY_assert.strictEqual( ['a\x00\x00b', 'c', 'd'], 'a\x00\x00b\x00c\x00d')plitRight('\x00', 2))

    // by string
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitRight('//'))
    ARY_assert.strictEqual( ['a//b//c', 'd'], 'a//b//c//d')plitRight('//', 1))
    ARY_assert.strictEqual( ['a//b', 'c', 'd'], 'a//b//c//d')plitRight('//', 2))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitRight('//', 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a//b//c//d')plitRight('//', 4))
    ARY_assert.strictEqual( ['a//b//c//d'], 'a//b//c//d')plitRight('//', 0))
    ARY_assert.strictEqual( ['a////b////c', '', 'd'], 'a////b////c////d')plitRight('//', 2)) // overlap
    ARY_assert.strictEqual( ['', ' begincase'], 'test begincase')plitRight('test'))
    ARY_assert.strictEqual( ['endcase ', ''], 'endcase test')plitRight('test'))
    ARY_assert.strictEqual( ['', ' bothcase ', ''], 'test bothcase test')plitRight('test'))
    ARY_assert.strictEqual( ['ab', 'c'], 'abbbc')plitRight('bb'))
    ARY_assert.strictEqual( ['', ''], 'aaa')plitRight('aaa'))
    ARY_assert.strictEqual( ['aaa'], 'aaa')plitRight('aaa', 0))
    ARY_assert.strictEqual( ['ab', 'ab'], 'abbaab')plitRight('ba'))
    ARY_assert.strictEqual( ['aaaa'], 'aaaa')plitRight('aab'))
    ARY_assert.strictEqual( [''], '')plitRight('aaa'))
    ARY_assert.strictEqual( ['aa'], 'aa')plitRight('aaa'))
    ARY_assert.strictEqual( ['bbob', 'A'], 'bbobbbobbA')plitRight('bbobb'))
    ARY_assert.strictEqual( ['', 'B', 'A'], 'bbobbBbbobbA')plitRight('bbobb'))

    // with limit
    ARY_assert.strictEqual( ['d'], 'a|b|c|d')plitRight('|', 3, 1))
    ARY_assert.strictEqual( ['b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3, 3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3, 4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3, 5))

    ARY_assert.strictEqual( ['a'], 'a|b|c|d')plitRight('|', 3, -1))
    ARY_assert.strictEqual( ['a|b', 'c'], 'a|b|c|d')plitRight('|', 2, -2))
    ARY_assert.strictEqual( ['a', 'b', 'c'], 'a|b|c|d')plitRight('|', 3, -3))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3, -4))
    ARY_assert.strictEqual( ['a', 'b', 'c', 'd'], 'a|b|c|d')plitRight('|', 3, -5))

  })
})
*/
describe('- strip([string1],[string2],...)', function()
{
	it('should return the new string with all occurrences of [string1],[string2],... removed', function()
	{
		assert.ok( ExStr('which ones will it take out one wonders').strip('on', 'er').toString() === 'which es will it take out e wds' );
		assert.ok( ExStr(' -- 1 2 - 3 4 5 - -- 6 7 _-- 8  9  0 ').strip('-', '_', ' ').toString() === '1234567890' );
	});
});

describe('- stripLeft(chars)', function ()
{
	it('should return the new string with all occurences of `chars` removed from left', function ()
	{
		assert.ok( ExStr('hello').stripLeft().toString() === 'hello' );
		assert.ok( ExStr('hello').stripLeft('').toString() === 'hello' );
		assert.ok( ExStr('  hello  ').stripLeft().toString() === 'hello  ' );
		assert.ok( ExStr('foo ').stripLeft().toString() === 'foo ' );
		assert.ok( ExStr('').stripLeft().toString() === '' );
		assert.ok( ExStr('aazz').stripLeft('a').toString() === 'zz' );
		assert.ok( ExStr('yytest').stripLeft('t').toString() === 'yytest' );
		assert.ok( ExStr('xxxyyxx').stripLeft('x').toString() === 'yyxx' );
		assert.ok( ExStr('abcz').stripLeft('a-z').toString() === 'bcz' );
		assert.ok( ExStr('z alpha z').stripLeft('a-z').toString() === ' alpha z' );
		assert.ok( ExStr('_-foobar-_').stripLeft('_-').toString() === 'foobar-_' );
		assert.ok( ExStr('_.foo-_').stripLeft('_.').toString() === 'foo-_' );
		assert.ok( ExStr('?foo ').stripLeft('?').toString() === 'foo ' );
		assert.ok( ExStr('[$]hello-^').stripLeft('^[a-z]$').toString() === 'hello-^' );
		assert.ok( ExStr((123).toString()).stripLeft(1).toString() === '23' );
		assert.ok( ExStr('aztesta').stripLeft('^[a-z]\0$').toString() === 'testa' );
		assert.ok( ExStr('b	\ntest').stripLeft('\tb\n').toString() === 'test' );
	});
});

describe('- stripRight(chars)', function ()
{
	it('should return the new string with all occurences of `chars` removed from right', function ()
	{
		assert.ok( ExStr('hello').stripRight().toString() === 'hello' );
		assert.ok( ExStr('hello').stripRight('').toString() === 'hello' );
		assert.ok( ExStr('  hello  ').stripRight().toString() === '  hello' );
		assert.ok( ExStr('  foo').stripRight().toString() === '  foo' );
		assert.ok( ExStr('').stripRight().toString() === '' );
		assert.ok( ExStr('aazz').stripRight('z').toString() === 'aa' );
		assert.ok( ExStr('xxxyyxx').stripRight('x').toString() === 'xxxyy' );
		assert.ok( ExStr('abcz').stripRight('a-z').toString() === 'abc' );
		assert.ok( ExStr('z alpha z').stripRight('a-z').toString() === 'z alpha ' );
		assert.ok( ExStr('_-foobar-_').stripRight('_-').toString() === '_-foobar' );
		assert.ok( ExStr('_.foo_.').stripRight('_.').toString() === '_.foo' );
		assert.ok( ExStr(' foo?').stripRight('?').toString() === ' foo' );
		assert.ok( ExStr('[$]hello-^').stripRight('^[a-z]$').toString() === '[$]hello' );
		assert.ok( ExStr((123).toString()).stripRight(3).toString() === '12' );
	});
});

describe('- right(N)', function()
{
	it('should return the substring denoted by N positive right-most characters', function()
	{
		assert.ok( ExStr('I AM CRAZY').right(2).toString() === 'ZY' );
		assert.ok( ExStr('Does it work?  ').right(4).toString() === 'k?  ' );
		assert.ok( ExStr('Hi').right(0).toString() === '' );
	});

	it('should return the substring denoted by N negative right-most characters, equivalent to calling left(-N)', function()
	{
		assert.ok( ExStr('My name is JP').right(-2).toString() === 'My' );
	});
});

describe('- slugify', function()
{
	it('should convert the text to url slug', function()
	{
		assert.ok( ExStr('Global Thermonuclear Warfare').slugify().toString() === 'global-thermonuclear-warfare' );
		assert.ok( ExStr('Fast JSON Parsing').slugify().toString() === 'fast-json-parsing' );
		assert.ok( ExStr('Crème brûlée').slugify().toString() === 'creme-brulee' );
	});
});

describe('- startsWithAny(prefix1 [, prefix2, ...])', function()
{
	it("should return true if the string starts with the input string", function()
	{
		assert.ok( ExStr("JP is a software engineer").startsWith("JP") );
		assert.ok( ExStr("JP is a software engineer").startsWithAny("JP") );
		assert.ok( !(ExStr('wants to change the world').startsWith("politicians") ));
		assert.ok( ExStr("").startsWith("") );
		assert.ok( ExStr("Hi").startsWith("") );
		assert.ok( ExStr("JP").startsWith("JP") );
		assert.ok( ExStr("").startsWithAny("") );
		assert.ok( ExStr("Hi").startsWithAny("") );
		assert.ok( ExStr("JP").startsWithAny("JP") );
		assert.ok( ExStr("Chunky Bacon").startsWithAny("JP", "Chunk") );
		assert.ok( !(ExStr("Lorem Ipsum").startsWithAny("Ip", "Sum") ));
	});
});

describe('- stripPunctuation()', function()
{
	it('should strip all of the punctuation', function()
	{
		assert.ok( ExStr('My, st[ring] *full* of %punct)').stripPunctuation().toString() === 'My string full of punct' );
	});
});

describe('- stripTags([tag1],[tag2],...)', function()
{
	it('should strip all of the html tags or tags specified by the parameters', function()
	{
		assert.ok( ExStr('<p>just <b>some</b> text</p>').stripTags().toString() === 'just some text' );
		assert.ok( ExStr('<p>just <b>some</b> text</p>').stripTags('p').toString() === 'just <b>some</b> text' );
		assert.ok( ExStr('<p>just <b>some</b> text</p>').stripTags('p', 'b').toString() === 'just some text' );
		assert.ok( ExStr('<p>just <b>some</b> text</p>').stripTags('a').toString() === '<p>just <b>some</b> text</p>' );
		assert.ok( ExStr('<p class="jozo">just <b>some</b> text</p>').stripTags('p').toString() === 'just <b>some</b> text' );
	});
});

describe('- titleCase()', function()
{
	it('should upperCase all words in a camel cased string', function()
	{
		assert.strictEqual( ExStr('dataRate').titleCase().toString(), 'DataRate' );
		assert.strictEqual( ExStr('CarSpeed').titleCase().toString(), 'CarSpeed' );
		assert.strictEqual( ExStr('yesWeCan').titleCase().toString(), 'YesWeCan' );
		assert.strictEqual( ExStr('backgroundColor').titleCase().toString(), 'BackgroundColor' );
	});

	it('should upperCase all words in a string with spaces, underscores, or dashes', function()
	{
		assert.strictEqual( ExStr('Like ice in the sunshine').titleCase().toString(), 'Like Ice In The Sunshine' );
		assert.strictEqual( ExStr('data_rate').titleCase().toString(), 'Data_Rate' );
		assert.strictEqual( ExStr('background-color').titleCase().toString(), 'Background-Color' );
		assert.strictEqual( ExStr('-moz-something').titleCase().toString(), '-Moz-Something' );
		assert.strictEqual( ExStr('_car_speed_').titleCase().toString(), '_Car_Speed_' );
		assert.strictEqual( ExStr('yes_we_can').titleCase().toString(), 'Yes_We_Can' );
	});

	it('can be combined with humanize to create nice titles out of ugly developer strings', function()
	{
		assert.strictEqual( ExStr('   capitalize dash-CamelCase_underscore trim  ').humanize().titleCase().toString(), 'Capitalize Dash Camel Case Underscore Trim' );
	});

	it('does not fail on edge cases', function ()
	{
		assert.strictEqual( ExStr('').titleCase().toString(), '' );
	});
});

describe('- toFloat([precision])', function()
{
	it('should return the float value, wraps parseFloat', function()
	{
		assert.ok( ExStr('5').toFloat() === 5 );
		assert.ok( ExStr('5.3').toFloat() === 5.3 );
		assert.ok( ExStr('-10').toFloat() === -10 );
		assert.ok( ExStr('55.3 adfafaf').toFloat() === 55.3 );
		assert.ok( ExStr(' 	 55.3 adfafaf').toFloat() === 55.3 );
		assert.ok( ExStr('afff 44').toFloat().toString() === 'NaN' );
		assert.ok( ExStr('3.45522222333232').toFloat(2) === 3.46 );

		assert.ok( ExStr(' 	 5 5.3 adfafaf').toFloat(undefined, '.', '', true) === 55.3 );
		assert.ok( ExStr('1, 000, 000.232').toFloat(undefined, '.', ', ') === 1000000.232 );
		assert.ok( ExStr('1,24343').toFloat(undefined, ',') === 1.24343 );
	});
});

describe('- toBoolean', function()
{
	it('should convert a logical truth string to boolean', function()
	{
		assert.ok( ExStr('true').toBool() );
		assert.ok( !(ExStr('false').toBool() ));
		assert.ok( !(ExStr('hello').toBool() ));
		assert.ok( ExStr('on').toBool() );
		assert.ok( ExStr('ok').toBool() );
		assert.ok( ExStr('OK').toBool() );
		assert.ok( ExStr('Ok').toBool() );
		assert.ok( ExStr('yes').toBool() );
		assert.ok( ExStr('TRUE').toBool() );
		assert.ok( ExStr('TrUe').toBool() );
		assert.ok( ExStr('YES').toBool() );
		assert.ok( ExStr('ON').toBool() );
		assert.ok( !(ExStr('').toBool() ));
		assert.ok( !(ExStr('undefined').toBool() ));
		assert.ok( !(ExStr('null').toBool() ));
		assert.ok( !(ExStr({}.toString()).toBool() ));
		assert.ok( ExStr((1).toString()).toBool() );
		assert.ok( !(ExStr((-1).toString()).toBool() ));
		assert.ok( !(ExStr((0).toString()).toBool() ));
		assert.ok( ExStr('1').toBool() );
		assert.ok( !(ExStr('0').toBool() ));
	});
});
/*
describe('- toCSV(options)', function() {
  it('should convert the array to csv', function() {
    assert.strictEqual( ['a', 'b', 'c']).toCSV(), '"a","b","c"' );
    assert.strictEqual( ['a', 'b', 'c']).toCSV(':'), '"a":"b":"c"' );
    assert.strictEqual( ['a', 'b', 'c']).toCSV(':', null), 'a:b:c' );
    assert.strictEqual( ['a', 'b', 'c']).toCSV('*', "'"), "'a'*'b'*'c'");
    assert.strictEqual( ['a"', 'b', 4, 'c']).toCSV({delimiter: ',', qualifier: '"', escape: '\\',  encloseNumbers: false}), '"a\\"","b",4,"c"' );
    assert.strictEqual( {firstName: 'JP', lastName: 'Richardson'}).toCSV({keys: true}), '"firstName","lastName"' );
    assert.strictEqual( {firstName: 'JP', lastName: 'Richardson'}).toCSV(), '"JP","Richardson"' );
    assert.strictEqual( ['a', null, undefined, 'c']).toCSV(), '"a","","","c"' );
    assert.strictEqual( ['my "foo" bar', 'barf']).toCSV({delimiter: ';', qualifier: '"', escape: '"'}), '"my ""foo"" bar";"barf"' );
  })
})
*/
describe('- toInt()', function()
{
	it('should return the integer value, wraps parseInt', function()
	{
		assert.ok( ExStr('5').toInt() === 5 );
		assert.ok( ExStr('5.3').toInt() === 5 );
		assert.ok( ExStr(5.3).toInt() === 5 );
		assert.ok( ExStr('-10').toInt() === -10 );
		assert.ok( ExStr('55 adfafaf').toInt() === 55 );
		assert.ok( ExStr('afff 44').toInt().toString() === 'NaN' );
		assert.ok( ExStr('0xff').toInt() === 255 );
		assert.ok( ExStr('0b101').toInt() === 5 );

		assert.ok( ExStr(' 10, 000.23').toInt(', ', false) === 10000 );
		assert.ok( ExStr(' 10 000.23').toInt('', true) === 10000 );
	});
});

describe('- trim()', function()
{
	it('should return the string with leading and trailing whitespace removed', function()
	{
		assert.ok( ExStr('hello ').trim().toString() === 'hello' );
		assert.ok( ExStr(' hello ').trim().toString() === 'hello' );
		assert.ok( ExStr('\nhello').trim().toString() === 'hello' );
		assert.ok( ExStr('\nhello\r\n').trim().toString() === 'hello' );
		assert.ok( ExStr('\thello\t').trim().toString() === 'hello' );
	});
});

describe('- trimLeft()', function()
{
	it('should return the string with leading whitespace removed', function()
	{
		assert.ok( ExStr('  How are you?').trimLeft().toString() === 'How are you?' );
		assert.ok( ExStr(' JP ').trimLeft().toString() === 'JP ' );
	});
});

describe('- trimRight()', function()
{
	it('should return the string with trailing whitespace removed', function()
	{
		assert.ok( ExStr('How are you?  ').trimRight().toString() === 'How are you?' );
		assert.ok( ExStr(' JP ').trimRight().toString() === ' JP' );
	});
});

describe('- truncate(length, [chars])', function()
{
	it('should truncate the string, accounting for word placement and chars count', function()
	{
		assert.ok( ExStr('this is some long text').truncate(3).toString() === '...' );
		assert.ok( ExStr('this is some long text').truncate(7).toString() === 'this...' );
		assert.ok( ExStr('this is some long text').truncate(11).toString() === 'this is...' );
		assert.ok( ExStr('this is some long text').truncate(12).toString() === 'this is...' );
		assert.ok( ExStr('this is some long text').truncate(14).toString() === 'this is...' );
		assert.ok( ExStr('this is some long text').truncate(15).toString() === 'this is some...' );
		assert.ok( ExStr('this is some. long text').truncate(15).toString() === 'this is some...' );
		assert.ok( ExStr('this is some long text').truncate(16).toString() === 'this is some...' );
		assert.ok( ExStr('this is some long text').truncate(11).toString() === 'this is...' );
		assert.ok( ExStr('this is             some long text').truncate(11).toString() === 'this is...' );
		assert.ok( ExStr('this is some long text').truncate(15, ' read more').toString() === 'this read more' );
		assert.strictEqual( ExStr('some string').truncate(200).toString(), 'some string' );
	});
});

describe('- underscore()', function()
{
	it('should convert a camel cased string into a string separated by underscores', function()
	{
		assert.ok( ExStr('dataRate').underscore().toString() === 'data_rate' );
		assert.ok( ExStr('CarSpeed').underscore().toString() === 'car_speed' );
		assert.ok( !(ExStr('CarSpeed').underscore().toString() === '_car_speed' ));
		assert.ok( ExStr('_CarSpeed').underscore().toString() === '_car_speed' );
		assert.ok( ExStr('yesWeCan').underscore().toString() === 'yes_we_can' );
		assert.ok( ExStr('oneAtATime').underscore().toString() === 'one_at_a_time' );
		assert.ok( ExStr('oneAtATime AnotherWordAtATime').underscore().toString() === 'one_at_a_time_another_word_at_a_time' );
	});
});

describe('- unescapeHTML', function()
{
	it('should unescape the HTML', function()
	{
		assert.ok( ExStr('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&apos;&lt;/div&gt;').unescapeHTML().toString() === '<div>Blah & "blah" & \'blah\'</div>' );
		assert.ok( ExStr('&amp;lt;').unescapeHTML().toString() === '&lt;' );
		assert.ok( ExStr('&amp;&lt;').unescapeHTML().toString() === '&<' );
		assert.ok( ExStr('105&#x20AC;').unescapeHTML().toString() === '105€' );
		assert.ok( ExStr('105&#8364;').unescapeHTML().toString() === '105€' );
	});
});

describe('- Base64', function()
{
	it('should convert from Base64', function()
	{
		assert.ok( ExStr('Zm9vIGJhcg==').fromBase64().toString() === 'foo bar' );
	});

	it('should convert to Base64', function()
	{
		assert.ok( ExStr('foo bar').toBase64().toString() === 'Zm9vIGJhcg==' );
	});
});

describe('- Misc', function()
{
	it('should inspect', function()
	{
		assert.ok( ExStr('foo bar').inspect().toString() === '\'foo bar\'' );
	});
});

/*describe('- Overload', function()
{
	it('should overload func', function()
	{
		assert.ok( 'jon'.test_capitalize() === 'Jon' );
	});

	it('should overload property', function()
	{
		assert.ok( 'foobar'.test_isAlpha === true );
	});
});*/
