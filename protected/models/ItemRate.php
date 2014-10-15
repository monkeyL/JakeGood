<?php


class ItemRate extends IActiveRecord
{
    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return '{{item_rate}}';
    }

    /**
     * @return array relational rules.
     */
    public function relations()
    {
            // NOTE: you may need to adjust the relation name and the related
            // class name for the relations automatically generated below.
            return array(
                    'Item'   => array(self::BELONGS_TO, 'Item', 'item_id'),
            );
    }

    /**
     * Returns the static model of the specified AR class.
     * Please note that you should have this exact method in all your CActiveRecord descendants!
     * @param string $className active record class name.
     * @return ItemImg the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

} 