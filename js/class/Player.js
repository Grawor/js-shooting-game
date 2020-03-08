// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : プレイヤークラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
class Player extends createjs.Shape{

    // getter
    getX() { return this.x; }   // X位置を返す。
    getY() { return this.y; }   // Y位置を返す。
    getLevel() { return this.level }
    getExp() { return this.exp }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor() {

        super();    // 親クラスのコンストラクタ呼び出し

        this.x = 0;
        this.y = 0;

        this.exp = 0;
        this.level = 1;

        // プレイヤーの形を定義
        this.graphics.beginFill("white").moveTo(0, -10).lineTo(-5, 0).lineTo(5, 0).closePath();
    }
    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : プレイヤーを移動する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    move(stage) {

        // 自機をマウス座標まで移動させる(減速で移動)
        this.x += (stage.mouseX - this.x) * 0.1;
        this.y += (stage.mouseY - this.y) * 0.1;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 経験値を取得
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    addExp(exp) {
        this.exp = this.exp + exp;
        this.level = Math.ceil(this.exp / 500)
    }
}