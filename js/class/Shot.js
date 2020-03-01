// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : 弾クラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
class Bullet extends createjs.Shape{

    x;      // 弾のX位置
    y;      // 弾のY位置
    stage;  // 描写させるステージ
    
    level;  // 弾レベル

    // getter
    getX() { return this.x; }   // X位置を返す。
    getY() { return this.y; }   // Y位置を返す。

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor(stage, x, y, level) {

        super();    // 親クラスのコンストラクタ呼び出し

        this.x = x;
        this.y = y;
        this.stage = stage;
        
        this.level = level;

        // 弾の形を定義
        this.graphics.beginFill("white").drawCircle(0, 0, level * 3);
        // ステージに追加
        stage.addChild(this);
    }
    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 弾を移動する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    move() {

        // 弾を移動させる。
        // this.x += 10;
        this.y -= 10 + this.level;
    }
}