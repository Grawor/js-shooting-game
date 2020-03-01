// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : エネミークラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
class Enemy extends createjs.Shape{

    x;      // 敵のX位置
    y;      // 敵のY位置
    stage;  // 描写させるステージ

    // getter
    getX() { return this.x; }   // X位置を返す。
    getY() { return this.y; }   // Y位置を返す。

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor(stage, stageW, stageH) {

        super();    // 親クラスのコンストラクタ呼び出し

        this.x = 0;
        this.y = 0;
        this.stage = stage;

        // 敵の形を定義
        // this.graphics.beginFill("red").moveTo(-5, 0).lineTo(+20, +15).lineTo(+20, -15).closePath();
        this.graphics.beginFill("red").moveTo(10,-5).lineTo(10,5).lineTo(5,5).lineTo(5,10)
            .lineTo(-5,10).lineTo(-5,5).lineTo(-10,5).lineTo(-10,-5).closePath();

        // 画面右端からランダムに生成
        // this.x = stageW;
        // this.y = stageH * Math.random();

        // 画面上側からランダムに生成
        this.x = stageW * Math.random();
        this.y = stageH;

        // ステージに追加
        stage.addChild(this); // 画面に表示
        // enemyList.push(this); // 配列に保存
    }
    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 敵を移動する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    move() {

        // 敵を移動させる。
        // this.x -= 1;
        this.y += 1;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 敵とプレイヤーの弾との衝突判定をする。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    collideWith(bullet) {

        // 敵から見た発射弾のローカル座標を取得
        var pt = bullet.localToLocal(0, 0, this);

        // 当たり判定を行う
        return this.hitTest(pt.x, pt.y);
        
    }
}