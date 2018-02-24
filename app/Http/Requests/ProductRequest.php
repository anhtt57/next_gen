<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'product_name' => 'required',
            'image' => 'required',
            'bundleId' => 'required',
            'product_id_android' => 'required',
            'product_id_ios' => 'required',
            'description' => 'required',
            'unit_name' => 'required',
            'usd_money' => 'required',
            'vnd_money' => 'required',
            'game_money' => 'required'
        ];
    }
}
