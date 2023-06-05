def fix(line, data):
    try:
        hash = line[20:[pos for pos, char in enumerate(line) if char == '&'][0]].lower()#hash is end of prefix to first '&', lowercased
    except:#if no '&dn='
        hash = line[20:]
        line = line + '&dn='
    try:
        int(hash, 16)#check if hash is hexadecimal
    except:
        return
    if line.count('&') > 1:#look for trackers
        location = 0
        tocheck = []
        while location < len(line):#find all occurences of '&'
            location = line.find('&', location)
            if location == -1:
                break
            tocheck.append(location)
            location += 1
        for index in tocheck:#iterate through occurences of '&'
            try:
                if (line[index + 1] == 't') and (line[index + 2] == 'r') and (line[index + 3] == '='):#if occurence is part of a tracker then ignore
                    pass
                else:#if not, it's part of the title so replace it
                    line = line[:index] + line[index + 1:]
            except IndexError:
                line = line[:index] + line[index + 1:]
        if line.count('&') > 1:#if it actually has only trackers now
            title = line[[pos for pos, char in enumerate(line) if char == '='][1] + 1:[pos for pos, char in enumerate(line) if char == '&'][1]]#title is second '=' to second '&'
        else:
            title = line[[pos for pos, char in enumerate(line) if char == '='][1] + 1:]#title is second '=' to end if no trackers
    else:
        title = line[[pos for pos, char in enumerate(line) if char == '='][1] + 1:]#title is second '=' to end if no trackers
    title = ''.join(char for char in title if ord(char) < 128)#strip non-ascii characters
    linesplit = ['magnet:?xt=urn:btih:', hash, '&dn=', title]
    data.append(linesplit)
    return data

data = []#lists within list
with open('everything.txt', encoding='utf-8') as file:#open file
    for line in file:
        line = line.strip()
        if line.startswith('magnet:?xt=urn:btih:'):#check for validity
            if 'magnet:?xt=urn:btih:' in line[20:]:#check for paste errors on my part
                secondline = line[line.find('magnet:?xt=urn:btih:', 20):]#the second magnet link in this line
                line = line[:line.find('magnet:?xt=urn:btih:', 20)]#the first magnet link in this line
                data = fix(secondline, data)#go ahead and add the second to data
            if 'magnetxturnbtih' in line[20:]:#paste errors that got symbols removed (and 'd' after the first '&', for some reason)
                hash = line[line.find('magnetxturnbtih', 20) + 15:line.find('n', line.find('magnetxturnbtih', 20) + 15)]#pull just the hash of the second magnet, which stretches from the end of the magnet prefix to the first occurrence of 'n' past the prefix
                title = line[line.find('n', line.find('magnetxturnbtih', 20) + 15) + 1:]#title stretches from that 'n' to the end (any trackers will be stripped out later)
                secondline = 'magnet:?xt=urn:btih:' + hash + '&dn=' + title#put it back together
                line = line[:line.find('magnetxturnbtih', 20)]
                data = fix(secondline, data)
            data = fix(line, data)#add split line to data

for magnet in data:
    for character in ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '\"', ',', '<', '>', '?', '/']:
        magnet[3] = magnet[3].replace(character, '')#get rid of symbols except '.' and '-'
    magnet[3] = magnet[3].replace(' ', '.')#replace spaces

dic = {}#dictionary to eliminate duplicate hashes
for i in sorted(data, key=lambda x: x[3]):#sorted data because it lets me replace null titles because the last duplicate keeps the title and nulls are listed first in sort
    dic[i[0] + i[1]] = i[2] + i[3]
results = []
for value in sorted(dic, key=dic.get):#sort dictionary
    results.append('{}{}'.format(value, dic[value]))

with open('output.txt', 'a', encoding='utf-8') as output:
    for i in results:
        output.write(i + '\n')