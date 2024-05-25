//模块引入
//引入默认暴露
import add from "./add";

//引入统一暴露
import { mins, random } from "./mins";

import minsObj from "./mins";


//引入分别暴露
// import { PI, show, obj } from "./utils";

//想要收集成一个对象来使用
import * as utilsAll from "./utils";

//引入时命名冲突
import { PI, show, obj ,mins as utilsMins} from "./utils";

console.log(minsObj);
console.log(utilsAll);
console.log(PI,obj);
console.log(utilsMins);
add(5,6)
mins(2,3)
random(7)
show()
