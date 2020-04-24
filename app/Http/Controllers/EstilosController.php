<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Euclidean;
use NaiveBayes;
use Session;

class EstilosController extends Controller
{
    public function getStyles(Request $request)
    {
        $styles = DB::table('estilos')->select('ec', 'or', 'ca', 'ea', 'style')->get();
        $min = 1000;

        $ec = $request->input('ec');
        $or = $request->input('or');
        $ca = $request->input('ca');
        $ea = $request->input('ea');
        $algorithm = $request->input('algorithm');

        $vectorX = [$ec, $or, $ca, $ea];

        return Euclidean::euclidean($vectorX, $styles);
    }
}
