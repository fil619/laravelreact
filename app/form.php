<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class form extends Model
{
  public $timestamps = false;

  protected $fillable = [
    'first_name',
    'last_name',
    'email',
    'mobileno',
    'gender',
    'dob',
    'comments'
];

}
