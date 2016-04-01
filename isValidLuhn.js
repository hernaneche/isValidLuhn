function isValidLuhn(num) {
        if (num == null) {
            return false;
        }

        if (num.length == 0) {
            return false;
        }

        try {
            var sumTable = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
            var sum = 0, flip = 0;

            for (var i = num.length - 1; i >= 0; i--, flip++) {
                sum += sumTable[flip & 0x1][parseInt(num.charAt(i))];
            }

            return ((sum % 10) == 0);

        } catch (e) {
            return false;//ante cualquier problema en la ejecución del algoritmo devuelve falso
        }
}
