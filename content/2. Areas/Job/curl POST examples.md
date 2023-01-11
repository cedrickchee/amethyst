

## Common Options
- `#`, `--progress-bar` Make curl display a simple progress bar instead of the more informational standard meter.
- `b`, --cookie <name=data> Supply cookie with request. If no =, then specifies the cookie file to use (see -c).
- `c`, `--cookie-jar` <file name> File to save response cookies to.

## POST

When sending data via a POST or PUT request, two common formats (specified via the Content-Type header) are:
- application/json
- application/x-www-form-urlencoded

Many APIs will accept both formats, so if you're using curl at the command line, it can be a bit easier to use the form urlencoded format instead of json because

- the json format requires a bunch of extra quoting
- curl will send form urlencoded by default, so for json the Content-Type header must be explicitly set

## curl usage

For sending data with POST and PUT requests, these are common curl options:

- request type
	- X POST
	- X PUT


## Examples

### POST application/x-www-form-urlencoded

application/x-www-form-urlencoded is the default:

`curl -d "param1=value1&amp;m2=value2" -X POST http://localhost:3000/data`

explicit:

`curl -d "param1=value1&amp;m2=value2" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/data`

### POST application/json

`curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data`
