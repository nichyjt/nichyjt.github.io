#!/bin/bash
if [ $# -ne 2 ]; then
    echo "Usage: convert.sh <input_filename> <output_filename>";
else
    cwebp -q 80 $1 -o $2
fi;
