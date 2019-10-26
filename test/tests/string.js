'use strict';

const assert = require('assert' );

require('../../lib/string')('');
require('../../lib/string')(''); // Should survive multiple loads

describe('- between(left, right)', function()
{
	it('should extract string between `left` and `right`', function()
	{
		assert.strictEqual( '<a>foo</a>'.between('<a>', '</a>'), 'foo' );
		assert.strictEqual( '<a>foo</a></a>'.between('<a>', '</a>'), 'foo' );
		assert.strictEqual( '<a><a>foo</a></a>'.between('<a>', '</a>'), '<a>foo' );
		assert.strictEqual( '<a>foo'.between('<a>', '</a>'), '' );
		assert.strictEqual( 'Some strings } are very {weird}, dont you think?'.between('{', '}'), 'weird' );
		assert.strictEqual( 'This is a test string'.between('test'), ' string' );
		assert.strictEqual( 'This is a test string'.between('', 'test'), 'This is a ' );
	});
});

describe('- camelize()', function()
{
	it('should remove any underscores or dashes and convert a string into camel casing', function()
	{
		assert.ok( 'data_rate'.camelize().toString() === 'dataRate' );
		assert.ok( 'background-color'.camelize() === 'backgroundColor' );
		assert.ok( '-moz-something'.camelize() === 'MozSomething' );
		assert.ok( '_car_speed_'.camelize() === 'CarSpeed' );
		assert.ok( 'yes_we_can'.camelize() === 'yesWeCan' );
	});
});

describe('- capitalize()', function()
{
	it('should capitalize the string', function()
	{
		assert.ok( 'jon'.capitalize() === 'Jon' );
		assert.ok( 'JP'.capitalize() === 'Jp' );
		assert.ok( 'john Doe'.capitalize(false) === 'John Doe' );
	});
});

describe('- charAt(index)', function()
{
	it('should return a native JavaScript string with the character at the specified position', function()
	{
		assert.ok( 'hi'.charAt(1) === 'i' );
	});
});

describe('- chompLeft(prefix)', function()
{
	it('should remove `prefix` from start of string', function()
	{
		assert.ok( 'foobar'.chompLeft('foo') === 'bar' );
		assert.ok( 'foobar'.chompLeft('bar') === 'foobar' );
		assert.ok( ''.chompLeft('foo') === '' );
		assert.ok( ''.chompLeft('') === '' );
	});
});

describe('- chompRight(suffix)', function()
{
	it('should remove `suffix` from end of string', function()
	{
		assert.ok( 'foobar'.chompRight('foo') === 'foobar' );
		assert.ok( 'foobar'.chompRight('bar') === 'foo' );
		assert.ok( ''.chompRight('foo') === '' );
		assert.ok( ''.chompRight('') === '' );
	});
});

describe('- collapseWhitespace()', function()
{
	it('should convert all adjacent whitespace characters to a single space and trim the ends', function()
	{
		assert.ok( '  Strings   \t are   \n\n\t fun\n!  '.collapseWhitespace() === 'Strings are fun !' );
	});
});

describe('- containsubstring)', function()
{
	it('should return true if the string contains the specified input string', function()
	{
		assert.ok( 'JavaScript is one of the best languages!'.contains('one') );
		assert.ok( !( 'What do you think?'.contains('YES!') ) );
	});
});

describe('- count(substring)', function()
{
	it('should return the count of all substrings', function()
	{
		assert.strictEqual( 'JP likes to program. JP does not play in the NBA.'.count("JP"), 2 );
		assert.strictEqual( 'Does not exist.'.count("Flying Spaghetti Monster"), 0 );
		assert.strictEqual( 'Does not exist.'.count("Bigfoot"), 0 );
		assert.strictEqual( 'JavaScript is fun, therefore Node.js is fun'.count("fun"), 2 );
		assert.strictEqual( 'funfunfun'.count("fun"), 3 );
	});
});

describe('- equalsIgnoreCase()', function()
{
	it('should be equal', function()
	{
		assert.ok( 'jon'.equalsIgnoreCase('Jon') );
		assert.ok( 'Jon'.equalsIgnoreCase('jon') );
		assert.ok( 'jon'.equalsIgnoreCase('jon') );
		assert.ok( 'Jon'.equalsIgnoreCase('Jon') );
	});

	it('should not be equal', function()
	{
		assert.ok( !( 'John'.equalsIgnoreCase('Jon') ) );
	});
});

describe('- dasherize()', function()
{
	it('should convert a camel cased string into a string delimited by dashes', function()
	{
		assert.ok( 'dataRate'.dasherize() === 'data-rate' );
		assert.ok( 'CarSpeed'.dasherize() === '-car-speed' );
		assert.ok( 'yesWeCan'.dasherize() === 'yes-we-can' );
		assert.ok( 'backgroundColor'.dasherize() === 'background-color' );
	});
});

describe('- decodeHTMLEntities', function()
{
	it('should decode HTML entities into their proper string representation', function()
	{
		assert.strictEqual( 'Ken Thompson &amp; Dennis Ritchie'.decodeHTMLEntities(), 'Ken Thompson & Dennis Ritchie' );
		assert.strictEqual( '3 &lt; 4'.decodeHTMLEntities(), '3 < 4' );
		assert.strictEqual( 'http:&#47;&#47;'.decodeHTMLEntities(), 'http://' );
		assert.strictEqual( '105&#x20AC;'.decodeHTMLEntities(), '105€' );
		assert.strictEqual( '105&#8364;'.decodeHTMLEntities(), '105€' );
		assert.strictEqual( '&Aacute;'.decodeHTMLEntities(), 'Á' );
		assert.strictEqual( '&foobar;'.decodeHTMLEntities(), '&foobar;' );
	});
});

describe('- endsWith(suffix1[, suffix2, ..])', function()
{
	it("should return true if the string ends with the input string", function()
	{
		assert.ok( "hello jon".endsWith('jon') );
		assert.ok( "hello jon".endsWithAny('jon') );
		assert.ok( !('ffffaaa'.endsWith('jon') ) );
		assert.ok( "".endsWith('') );
		assert.ok( "hi".endsWith('') );
		assert.ok( "hi".endsWith('hi') );
		assert.ok( "test.jpeg".endsWithAny('png', 'jpg', 'jpeg') );
		assert.ok( "Chunky Bacon".endsWith('') );
		assert.ok( !( "Chunky Bacon".endsWithAny("nk", "aco") ) );
	});
});

describe('- ensureLeft(prefix)', function()
{
	it('should prepend `prefix` if string does not start with prefix', function()
	{
		assert.ok( 'foobar'.ensureLeft('foo') === 'foobar' );
		assert.ok( 'bar'.ensureLeft('foo') === 'foobar' );
		assert.ok( ''.ensureLeft('foo') === 'foo' );
		assert.ok( ''.ensureLeft('') === '' );
	});
});

describe('- ensureRight(suffix)', function()
{
	it('should append `suffix` if string does not end with suffix', function()
	{
		assert.ok( 'foobar'.ensureRight('bar') === 'foobar' );
		assert.ok( 'foo'.ensureRight('bar') === 'foobar' );
		assert.ok( ''.ensureRight('foo') === 'foo' );
		assert.ok( ''.ensureRight('') === '' );
	});
});

describe('- escapeHTML()', function()
{
	it('should escape the html', function()
	{
		assert.ok( '<div>Blah & "blah" & \'blah\'</div>'.escapeHTML() === '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&apos;&lt;/div&gt;' );
		assert.ok( '&lt;'.escapeHTML() === '&amp;lt;' );
	});
});

describe('- humanize()', function()
{
	it('should humanize the string', function()
	{
		assert.strictEqual( 'the_humanize_string_method'.humanize(), 'The humanize string method' );
		assert.strictEqual( 'ThehumanizeStringMethod'.humanize(), 'Thehumanize string method' );
		assert.strictEqual( 'the humanize string method'.humanize(), 'The humanize string method' );
		assert.strictEqual( 'the humanize_id string method_id'.humanize(), 'The humanize id string method' );
		assert.strictEqual( 'the  humanize string method  '.humanize(), 'The humanize string method' );
		assert.strictEqual( '   capitalize dash-CamelCase_underscore trim  '.humanize(), 'Capitalize dash camel case underscore trim' );
		assert.strictEqual( '123'.humanize(), '123' );
		assert.strictEqual( ''.humanize(), '' );
	});
});

describe('- includes substring', function()
{
	it('should return true if the string contains the specified input string', function()
	{
		assert.ok( 'JavaScript is one of the best languages!'.includes('one') );
		assert.ok( !('What do you think?'.includes('YES!') ));
	});
});

describe('- isAlpha', function()
{
	it("should return true if the string contains only letters", function()
	{
		assert.ok( "afaf".isAlpha );
		assert.ok( "FJslfjkasfs".isAlpha );
		assert.ok( "áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ".isAlpha );
		assert.ok( !("adflj43faljsdf".isAlpha ));
		assert.ok( !("33".isAlpha ));
		assert.ok( !("TT....TTTafafetstYY".isAlpha ));
		assert.ok( !("-áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ".isAlpha ));
		assert.ok( !("".isAlpha ));
	});
});

describe('- isAlphaNumeric', function()
{
	it("should return true if the string contains only letters and digits", function()
	{
		assert.ok( "afaf35353afaf".isAlphaNumeric );
		assert.ok( "FFFF99fff".isAlphaNumeric );
		assert.ok( "99".isAlphaNumeric );
		assert.ok( "afff".isAlphaNumeric );
		assert.ok( "Infinity".isAlphaNumeric );
		assert.ok( "áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ1234567890".isAlphaNumeric );
		assert.ok( !("-Infinity".isAlphaNumeric ));
		assert.ok( !("-33".isAlphaNumeric ));
		assert.ok( !("aaff..".isAlphaNumeric ));
		assert.ok( !(".áéúóúÁÉÍÓÚãõÃÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ1234567890".isAlphaNumeric ));
	});
});

describe('- isEmpty', function()
{
	it('should return true if the string is solely composed of whitespace or is null', function()
	{
		assert.ok( ' '.isEmpty );
		assert.ok( '\t\t\t    '.isEmpty );
		assert.ok( '\n\n '.isEmpty );
		assert.ok( !('hey'.isEmpty ));
	});
});

describe('- isLower', function()
{
	it('should return true if the character or string is lowercase', function()
	{
		assert.ok( 'a'.isLower );
		assert.ok( 'z'.isLower );
		assert.ok( !('B'.isLower ));
		assert.ok( 'hijp'.isLower );
		assert.ok( 'áéúóúãõàèìòùâêîôûäëïöüç'.isLower );
		assert.ok( 'áéúóúãõàèìòùâêîôûäëïöüça'.isLower );
		assert.ok( !('hi jp'.isLower ));
		assert.ok( !('HelLO'.isLower ));
		assert.ok( !('ÁÉÍÓÚÃÕÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇ'.isLower ));
		assert.ok( !('áéúóúãõàèìòùâêîôûäëïöüçÁ'.isLower ));
		assert.ok( !('áéúóúãõàèìòùâêîôû äëïöüç'.isLower ));
	});
});

describe('- isNumeric', function()
{
	it("should return true if the string only contains digits, this would not include Infinity or -Infinity", function()
	{
		assert.ok( "3".isNumeric );
		assert.ok( !("34.22".isNumeric ));
		assert.ok( !("-22.33".isNumeric ));
		assert.ok( !("NaN".isNumeric ));
		assert.ok( !("Infinity".isNumeric ));
		assert.ok( !("-Infinity".isNumeric ));
		assert.ok( !("JP".isNumeric ));
		assert.ok( !("-5".isNumeric ));
		assert.ok( "000992424242".isNumeric );
	});
});

describe('- isUpper', function()
{
	it('should return true if the character or string is uppercase', function()
	{
		assert.ok( !('a'.isUpper ));
		assert.ok( !('z'.isUpper ));
		assert.ok( 'B'.isUpper );
		assert.ok( 'HIJP'.isUpper );
		assert.ok( 'ÁÉÍÓÚÃÕÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇ'.isUpper );
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
		assert.ok( 'crème brûlée'.latinise() === 'creme brulee' );
		assert.ok( 'CRÈME BRÛLÉE'.latinise() === 'CREME BRULEE' );
		assert.ok( 'Příliš žluťoučký kůň úpěl ďábelské ódy'.latinise() === 'Prilis zlutoucky kun upel dabelske ody' );
		assert.ok( 'chinese 中英字典 YellowBridge'.latinise() === 'chinese 中英字典 YellowBridge' );
	});
});

describe('- length', function()
{
	it('should return the length of the string', function()
	{
		assert.ok( 'hello'.length === 5 );
		assert.ok( ''.length === 0 );
	});
});

describe('- left(N)', function()
{
	it('should return the substring denoted by N positive left-most characters', function()
	{
		assert.ok( 'My name is JP'.left(2) === 'My' );
		assert.ok( 'Hi'.left(0) === '' );
		assert.ok( 'Hello'.left(1) === 'H' );
	});

	it('should return the substring denoted by N negative left-most characters, equivalent to calling right(-N)', function()
	{
		assert.ok( 'My name is JP'.left(-2) === 'JP' );
	});
});

describe('- pad(len, [char])', function()
{
	it('should pad the string in the center with specified character', function()
	{
		assert.ok( 'hello'.pad(5) === 'hello' );
		assert.ok( 'hello'.pad(10) === '   hello  ' );
		assert.ok( 'hey'.pad(7) === '  hey  ' );
		assert.ok( 'hey'.pad(5) === ' hey ' );
		assert.ok( 'hey'.pad(4) === ' hey' );
		assert.ok( 'hey'.pad(7, '-') === '--hey--' );
	});

	it('should work on numbers', function()
	{
		assert.ok( (1234).toString().pad(4, '0') === '1234' );
		assert.ok( (1234).toString().pad(7, '0') === '0012340' );
		assert.ok( (1234).toString().pad(7, '1') === '1112341' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( 'hello'.pad(5, null) === 'hello' );
		assert.ok( 'hello'.pad(10, null) === '   hello  ' );
	});
});

describe('- padLeft(len, [char])', function()
{
	it('should left pad the string', function()
	{
		assert.ok( 'hello'.padLeft(5) === 'hello' );
		assert.ok( 'hello'.padLeft(10) === '     hello' );
		assert.ok( 'hello'.padLeft(7) === '  hello' );
		assert.ok( 'hello'.padLeft(6) === ' hello' );
		assert.ok( 'hello'.padLeft(10, '.') === '.....hello' );
	});

	it('should work on numbers', function()
	{
		assert.ok( (1234).toString().padLeft(4, '0') === '1234' );
		assert.ok( (1234).toString().padLeft(7, '0') === '0001234' );
		assert.ok( (1234).toString().padLeft(7, '1') === '1111234' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( 'hello'.padLeft(5, null) === 'hello' );
		assert.ok( 'hello'.padLeft(10, null) === '     hello' );
	});
});

describe('- padRight(len, [char])', function()
{
	it('should right pad the string', function()
	{
		assert.ok( 'hello'.padRight(5) === 'hello' );
		assert.ok( 'hello'.padRight(10) === 'hello     ' );
		assert.ok( 'hello'.padRight(7) === 'hello  ' );
		assert.ok( 'hello'.padRight(6) === 'hello ' );
		assert.ok( 'hello'.padRight(10, '.') === 'hello.....' );
	});

	it('should work on numbers', function()
	{
		assert.ok( (1234).toString().padRight(4, '0') === '1234' );
		assert.ok( (1234).toString().padRight(7, '0') === '1234000' );
		assert.ok( (1234).toString().padRight(7, '1') === '1234111' );
	});

	it('should use the default padding character when given null', function()
	{
		assert.ok( 'hello'.padRight(5, null) === 'hello' );
		assert.ok( 'hello'.padRight(10, null) === 'hello     ' );
	});
});

/*
describe('- parseCSV([delim],[qualifier],[escape],[lineDelimiter])', function() {
  it('should parse a CSV line into an array', function() {
    ARY_assert.strictEqual( "'a','b','c'").parseCSV(',', "'"), ['a', 'b', 'c'])
    ARY_assert.strictEqual( '"a","b","c"').parseCSV(), ['a', 'b', 'c'])
    ARY_assert.strictEqual( 'a,b,c').parseCSV(',', null), ['a', 'b', 'c'])
    ARY_assert.strictEqual( "'a,','b','c'").parseCSV(',', "'"), ['a,', 'b', 'c'])
    ARY_assert.strictEqual( '"a","b",4,"c"').parseCSV(',', null), ['"a"', '"b"', '4', '"c"'])
    ARY_assert.strictEqual( '"a","b","4","c"').parseCSV(), ['a', 'b', '4', 'c'])
    ARY_assert.strictEqual( '"a","b",       "4","c"').parseCSV(), ['a', 'b', '4', 'c'])
    ARY_assert.strictEqual( '"a","b",       4,"c"').parseCSV(",", null), [ '"a"', '"b"', '       4', '"c"' ])
    ARY_assert.strictEqual( '"a","b\\"","d","c"').parseCSV(), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( '"jp","really\tlikes to code"').parseCSV(), ['jp', 'really\tlikes to code'])
    ARY_assert.strictEqual( '"a","b+"","d","c"').parseCSV(",", "\"", "+"), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( '"a","b""","d","c"').parseCSV(",", "\"", "\""), ['a', 'b"', 'd', 'c'])
    ARY_assert.strictEqual( '"a","","c"').parseCSV(), ['a', '', 'c'])
    ARY_assert.strictEqual( '"","b","c"').parseCSV(), ['', 'b', 'c'])
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
		assert.ok( 'a \nb\r\nc\rd\td\ne'.lines() === 4 );
		assert.ok( 'a \nb\r\nc\rd\td\n'.lines() === 3 );

		assert.ok( 'a \nb\r\nc\rd\td\ne'.lines(false) === 4 );
		assert.ok( 'a \nb\r\nc\rd\td\n'.lines(false) === 4 );
	});
});

describe('- repeat(n)', function()
{
	it('should return the string concatenated with itself n times', function()
	{
		assert.ok( ' '.repeat(5) === '     ' );
		assert.ok( '*'.repeat(3) === '***' );
		assert.ok( 'ab'.repeat(3) === 'ababab' );
		assert.ok( 'ab '.repeat(3) === 'ab ab ab ' );
	});
});

describe('- replaceAll(substring, replacement)', function()
{
	it('should return the new string with all occurrences of substring replaced with the replacment string', function()
	{
		assert.ok( ' does IT work? '.replaceAll(' ', '_') === '_does_IT_work?_' );
		assert.ok( 'Yes it does!'.replaceAll(' ', '') === 'Yesitdoes!' );
		assert.ok( 'lalala.blabla'.replaceAll('.', '_') === 'lalala_blabla' );
		var e = '\\', q = '"';
		var r = e + q;
		assert.ok( 'a'.replaceAll(q, r) === 'a' );
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
		assert.ok( 'which ones will it take out one wonders'.strip('on', 'er') === 'which es will it take out e wds' );
		assert.ok( ' -- 1 2 - 3 4 5 - -- 6 7 _-- 8  9  0 '.strip('-', '_', ' ') === '1234567890' );
	});
});

describe('- stripLeft(chars)', function ()
{
	it('should return the new string with all occurences of `chars` removed from left', function ()
	{
		assert.ok( 'hello'.stripLeft() === 'hello' );
		assert.ok( 'hello'.stripLeft('') === 'hello' );
		assert.ok( '  hello  '.stripLeft() === 'hello  ' );
		assert.ok( 'foo '.stripLeft() === 'foo ' );
		assert.ok( ''.stripLeft() === '' );
		assert.ok( 'aazz'.stripLeft('a') === 'zz' );
		assert.ok( 'yytest'.stripLeft('t') === 'yytest' );
		assert.ok( 'xxxyyxx'.stripLeft('x') === 'yyxx' );
		assert.ok( 'abcz'.stripLeft('a-z') === 'bcz' );
		assert.ok( 'z alpha z'.stripLeft('a-z') === ' alpha z' );
		assert.ok( '_-foobar-_'.stripLeft('_-') === 'foobar-_' );
		assert.ok( '_.foo-_'.stripLeft('_.') === 'foo-_' );
		assert.ok( '?foo '.stripLeft('?') === 'foo ' );
		assert.ok( '[$]hello-^'.stripLeft('^[a-z]$') === 'hello-^' );
		assert.ok( (123).toString().stripLeft(1) === '23' );
		assert.ok( 'aztesta'.stripLeft('^[a-z]\0$') === 'testa' );
		assert.ok( 'b	\ntest'.stripLeft('\tb\n') === 'test' );
	});
});

describe('- stripRight(chars)', function ()
{
	it('should return the new string with all occurences of `chars` removed from right', function ()
	{
		assert.ok( 'hello'.stripRight() === 'hello' );
		assert.ok( 'hello'.stripRight('') === 'hello' );
		assert.ok( '  hello  '.stripRight() === '  hello' );
		assert.ok( '  foo'.stripRight() === '  foo' );
		assert.ok( ''.stripRight() === '' );
		assert.ok( 'aazz'.stripRight('z') === 'aa' );
		assert.ok( 'xxxyyxx'.stripRight('x') === 'xxxyy' );
		assert.ok( 'abcz'.stripRight('a-z') === 'abc' );
		assert.ok( 'z alpha z'.stripRight('a-z') === 'z alpha ' );
		assert.ok( '_-foobar-_'.stripRight('_-') === '_-foobar' );
		assert.ok( '_.foo_.'.stripRight('_.') === '_.foo' );
		assert.ok( ' foo?'.stripRight('?') === ' foo' );
		assert.ok( '[$]hello-^'.stripRight('^[a-z]$') === '[$]hello' );
		assert.ok( (123).toString().stripRight(3) === '12' );
	});
});

describe('- right(N)', function()
{
	it('should return the substring denoted by N positive right-most characters', function()
	{
		assert.ok( 'I AM CRAZY'.right(2) === 'ZY' );
		assert.ok( 'Does it work?  '.right(4) === 'k?  ' );
		assert.ok( 'Hi'.right(0) === '' );
	});

	it('should return the substring denoted by N negative right-most characters, equivalent to calling left(-N)', function()
	{
		assert.ok( 'My name is JP'.right(-2) === 'My' );
	});
});

describe('- slugify', function()
{
	it('should convert the text to url slug', function()
	{
		assert.ok( 'Global Thermonuclear Warfare'.slugify() === 'global-thermonuclear-warfare' );
		assert.ok( 'Fast JSON Parsing'.slugify() === 'fast-json-parsing' );
		assert.ok( 'Crème brûlée'.slugify() === 'creme-brulee' );
		assert.ok( 'pros/cons'.slugify() === 'pros-cons' );
	});
});

describe('- startsWithAny(prefix1 [, prefix2, ...])', function()
{
	it("should return true if the string starts with the input string", function()
	{
		assert.ok( "JP is a software engineer".startsWith("JP") );
		assert.ok( "JP is a software engineer".startsWithAny("JP") );
		assert.ok( !('wants to change the world'.startsWith("politicians") ));
		assert.ok( "".startsWith("") );
		assert.ok( "Hi".startsWith("") );
		assert.ok( "JP".startsWith("JP") );
		assert.ok( "".startsWithAny("") );
		assert.ok( "Hi".startsWithAny("") );
		assert.ok( "JP".startsWithAny("JP") );
		assert.ok( "Chunky Bacon".startsWithAny("JP", "Chunk") );
		assert.ok( !("Lorem Ipsum".startsWithAny("Ip", "Sum") ));
	});
});

describe('- stripPunctuation()', function()
{
	it('should strip all of the punctuation', function()
	{
		assert.ok( 'My, st[ring] *full* of %punct)'.stripPunctuation() === 'My string full of punct' );
	});
});

describe('- stripTags([tag1],[tag2],...)', function()
{
	it('should strip all of the html tags or tags specified by the parameters', function()
	{
		assert.ok( '<p>just <b>some</b> text</p>'.stripTags() === 'just some text' );
		assert.ok( '<p>just <b>some</b> text</p>'.stripTags('p') === 'just <b>some</b> text' );
		assert.ok( '<p>just <b>some</b> text</p>'.stripTags('p', 'b') === 'just some text' );
		assert.ok( '<p>just <b>some</b> text</p>'.stripTags('a') === '<p>just <b>some</b> text</p>' );
		assert.ok( '<p class="jozo">just <b>some</b> text</p>'.stripTags('p') === 'just <b>some</b> text' );
	});
});

describe('- titleCase()', function()
{
	it('should upperCase all words in a camel cased string', function()
	{
		assert.strictEqual( 'dataRate'.titleCase(), 'DataRate' );
		assert.strictEqual( 'CarSpeed'.titleCase(), 'CarSpeed' );
		assert.strictEqual( 'yesWeCan'.titleCase(), 'YesWeCan' );
		assert.strictEqual( 'backgroundColor'.titleCase(), 'BackgroundColor' );
	});

	it('should upperCase all words in a string with spaces, underscores, or dashes', function()
	{
		assert.strictEqual( 'Like ice in the sunshine'.titleCase(), 'Like Ice In The Sunshine' );
		assert.strictEqual( 'data_rate'.titleCase(), 'Data_Rate' );
		assert.strictEqual( 'background-color'.titleCase(), 'Background-Color' );
		assert.strictEqual( '-moz-something'.titleCase(), '-Moz-Something' );
		assert.strictEqual( '_car_speed_'.titleCase(), '_Car_Speed_' );
		assert.strictEqual( 'yes_we_can'.titleCase(), 'Yes_We_Can' );
	});

	it('can be combined with humanize to create nice titles out of ugly developer strings', function()
	{
		assert.strictEqual( '   capitalize dash-CamelCase_underscore trim  '.humanize().titleCase(), 'Capitalize Dash Camel Case Underscore Trim' );
	});

	it('does not fail on edge cases', function ()
	{
		assert.strictEqual( ''.titleCase(), '' );
	});
});

describe('- toFloat([precision])', function()
{
	it('should return the float value, wraps parseFloat', function()
	{
		assert.ok( '5'.toFloat() === 5 );
		assert.ok( '5.3'.toFloat() === 5.3 );
		assert.ok( '-10'.toFloat() === -10 );
		assert.ok( '55.3 adfafaf'.toFloat() === 55.3 );
		assert.ok( ' 	 55.3 adfafaf'.toFloat() === 55.3 );
		assert.ok( 'afff 44'.toFloat().toString() === 'NaN' );
		assert.ok( '3.45522222333232'.toFloat(2) === 3.46 );

		assert.ok( ' 	 5 5.3 adfafaf'.toFloat(undefined, '.', '', true) === 55.3 );
		assert.ok( '1, 000, 000.232'.toFloat(undefined, '.', ', ') === 1000000.232 );
		assert.ok( '1,24343'.toFloat(undefined, ',') === 1.24343 );
	});
});

describe('- toBoolean', function()
{
	it('should convert a logical truth string to boolean', function()
	{
		assert.ok( 'true'.toBool() );
		assert.ok( !('false'.toBool() ));
		assert.ok( !('hello'.toBool() ));
		assert.ok( 'on'.toBool() );
		assert.ok( 'ok'.toBool() );
		assert.ok( 'OK'.toBool() );
		assert.ok( 'Ok'.toBool() );
		assert.ok( 'yes'.toBool() );
		assert.ok( 'TRUE'.toBool() );
		assert.ok( 'TrUe'.toBool() );
		assert.ok( 'YES'.toBool() );
		assert.ok( 'ON'.toBool() );
		assert.ok( !(''.toBool() ));
		assert.ok( !('undefined'.toBool() ));
		assert.ok( !('null'.toBool() ));
		assert.ok( !({}.toString().toBool() ));
		assert.ok( (1).toString().toBool() );
		assert.ok( !((-1).toString().toBool() ));
		assert.ok( !((0).toString().toBool() ));
		assert.ok( '1'.toBool() );
		assert.ok( !('0'.toBool() ));
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
		assert.ok( '5'.toInt() === 5 );
		assert.ok( '5.3'.toInt() === 5 );
		assert.ok( (5.3).toString().toInt() === 5 );
		assert.ok( '-10'.toInt() === -10 );
		assert.ok( '55 adfafaf'.toInt() === 55 );
		assert.ok( 'afff 44'.toInt().toString() === 'NaN' );
		assert.ok( '0xff'.toInt() === 255 );
		assert.ok( '0b101'.toInt() === 5 );

		assert.ok( ' 10, 000.23'.toInt(', ', false) === 10000 );
		assert.ok( ' 10 000.23'.toInt('', true) === 10000 );
	});
});

describe('- trim()', function()
{
	it('should return the string with leading and trailing whitespace removed', function()
	{
		assert.ok( 'hello '.trim() === 'hello' );
		assert.ok( ' hello '.trim() === 'hello' );
		assert.ok( '\nhello'.trim() === 'hello' );
		assert.ok( '\nhello\r\n'.trim() === 'hello' );
		assert.ok( '\thello\t'.trim() === 'hello' );
	});
});

describe('- trimLeft()', function()
{
	it('should return the string with leading whitespace removed', function()
	{
		assert.ok( '  How are you?'.trimLeft() === 'How are you?' );
		assert.ok( ' JP '.trimLeft() === 'JP ' );
	});
});

describe('- trimRight()', function()
{
	it('should return the string with trailing whitespace removed', function()
	{
		assert.ok( 'How are you?  '.trimRight() === 'How are you?' );
		assert.ok( ' JP '.trimRight() === ' JP' );
	});
});

describe('- truncate(length, [chars])', function()
{
	it('should truncate the string, accounting for word placement and chars count', function()
	{
		assert.ok( 'this is some long text'.truncate(3) === '...' );
		assert.ok( 'this is some long text'.truncate(7) === 'this...' );
		assert.ok( 'this is some long text'.truncate(11) === 'this is...' );
		assert.ok( 'this is some long text'.truncate(12) === 'this is...' );
		assert.ok( 'this is some long text'.truncate(14) === 'this is...' );
		assert.ok( 'this is some long text'.truncate(15) === 'this is some...' );
		assert.ok( 'this is some. long text'.truncate(15) === 'this is some...' );
		assert.ok( 'this is some long text'.truncate(16) === 'this is some...' );
		assert.ok( 'this is some long text'.truncate(11) === 'this is...' );
		assert.ok( 'this is             some long text'.truncate(11) === 'this is...' );
		assert.ok( 'this is some long text'.truncate(15, ' read more') === 'this read more' );
		assert.strictEqual( 'some string'.truncate(200), 'some string' );
	});
});

describe('- underscore()', function()
{
	it('should convert a camel cased string into a string separated by underscores', function()
	{
		assert.ok( 'dataRate'.underscore() === 'data_rate' );
		assert.ok( 'CarSpeed'.underscore() === 'car_speed' );
		assert.ok( !('CarSpeed'.underscore() === '_car_speed' ));
		assert.ok( '_CarSpeed'.underscore() === '_car_speed' );
		assert.ok( 'yesWeCan'.underscore() === 'yes_we_can' );
		assert.ok( 'oneAtATime'.underscore() === 'one_at_a_time' );
		assert.ok( 'oneAtATime AnotherWordAtATime'.underscore() === 'one_at_a_time_another_word_at_a_time' );
	});
});

describe('- unescapeHTML', function()
{
	it('should unescape the HTML', function()
	{
		assert.ok( '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&apos;&lt;/div&gt;'.unescapeHTML() === '<div>Blah & "blah" & \'blah\'</div>' );
		assert.ok( '&amp;lt;'.unescapeHTML() === '&lt;' );
		assert.ok( '&amp;&lt;'.unescapeHTML() === '&<' );
		assert.ok( '105&#x20AC;'.unescapeHTML() === '105€' );
		assert.ok( '105&#8364;'.unescapeHTML() === '105€' );
	});
});

describe('- Base64', function()
{
	it('should convert from Base64', function()
	{
		assert.ok( 'Zm9vIGJhcg=='.fromBase64() === 'foo bar' );
	});

	it('should convert to Base64', function()
	{
		assert.ok( 'foo bar'.toBase64() === 'Zm9vIGJhcg==' );
	});
});

describe('- Misc', function()
{
	it('should inspect', function()
	{
		assert.ok( 'foo bar'.inspect() === '\'foo bar\'' );
	});
});
