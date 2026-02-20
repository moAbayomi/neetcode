package encodeanddecodestring

import (
	"strconv"
)

func encode(arr []string) string {
	var str string
	for i := 0; i < len(arr); i++ {
		str += strconv.Itoa(len(arr[i])) + "#" + arr[i]
	}
	return str
}

func decode(str string, res []string) []string {
	if len(str) == 0 {
		return res
	}

	i := 0
	for str[i] != '#' {
		i += 1
	}

	str_length, _ := strconv.Atoi(str[:i])
	start_of_str := i + 1
	end_of_str := str_length + start_of_str
	curr_str := str[start_of_str: end_of_str]
	res = append(res, curr_str)

	return decode(str[end_of_str:], res)

}

