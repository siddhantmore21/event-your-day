@extends('layouts.layout')

@section('content')
    @push('styles')
        <link href="{{ asset('frontend/css/custom-filter.css') }}" rel="stylesheet">
    @endpush
    <style type="text/css">
        /* .labeltag {
                                  position:relative;
                                }

                                    .select2-selection__placeholder{
                                        display:none;
                                    }
                                   .labeltag label {
                                    &.selected {
                                        top: 1020px;
                                        font-size: 18px;
                                        transform: translateY(0);
                                    }
                                    font-size: 16px;
                                    color: black;
                                    position: absolute;
                                    z-index: 1;
                                    top: 50%;
                                    left: 25px;
                                    transform: translateY(-50%);
                                    transition: all 0.2s ease 0s;
                                } */
        /* .select-wrap {
                                        border: 1px solid #777;
                                        border-radius: 4px;
                                        padding: 0 5px;
                                        width:200px;
                                        background-color:#fff;
                                        position:relative;
                                    }
                                    .select-wrap label{
                                        font-size:8px;
                                        text-transform: uppercase;
                                        color: black;
                                        padding: 0 8px;
                                        position: absolute;
                                        top:6px;
                                    }
                                    .select-wrap select{
                                  background-color: #fff;
                                  border:0px;
                                  height:50px;
                                  font-size: 16px;
                                } */
        .background-color {
            background-color: #aecdd2;
        }
    </style>
    <section>
        <div class="background-color cover-image sptb-2 sptb-tab ">
            <div class="header-text mb-0">
                <div class="container">
                    <div class="text-center text-white mb-7">
                        <h1 class="mb-1">Welcome To The Biggest Business Directory</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>


                    <div class="row justify-content-center" id="filter-container">
                        <div class="filter-container">
                            <div class="filter-options divider" id="filter-tailored-option">Business Type</div>
                            <div class="filter-options divider" id="filter-capicity">Capacity</div>
                            <div class="filter-options divider" id="filter-price">Price</div>
                            <div class="filter-options divider" id="filter-country">Country</div>
                            <div class="filter-options" id="filter-type">Type
                                <a href="javascript:void(0)" class="btn btn-secondary filter-btn-sm"
                                    style="margin-top:12px;" id="filter-btn-sm"><i class="fa fa-search"></i></a>


                            </div>

                        </div>

                    </div>





                    <div class="row" id="filter-div" style="display:none;">
                        <div class="col-xl-12 col-lg-12 col-md-12 d-block mx-auto">
                            <div class="py-3 px-4">
                                <div class="form row row-sm filter-box labeltag">
                                    <!-- data-placeholder="Tailored Options" -->
                                    <div class="form-group select-wrap col-xl-2 col-lg-2 col-md-12 select2-lg mb-0">
                                        <!-- <span id="tailored_options">Tailored Options</span>   -->
                                        <select
                                            class="form-control select2-show-search js-select border-bottom-0 filter-select"
                                            id="select-tailored" aria-label="Floating label select example"
                                            onchange="tailoredoption()">
                                            {{-- <option disabled>Business Type</option> --}}
                                            <option value="0">All</option>
                                            <option value="1">Venues</option>
                                            <option value="2">Catering</option>
                                            <option value="3">Decor</option>
                                            <option value="4">Entertainment</option>
                                            <option value="5">Photography/Videography</option>
                                            <option value="6">Transport</option>
                                            <option value="7">Confectionaries</option>
                                            <option value="8">Marquees</option>
                                            <option value="9">Fasion Clothing </option>
                                            <option value="10">Hair & Makeup</option>

                                        </select>
                                        <!--  -->
                                    </div>

                                    <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg mb-0" id="capacity-div">
                                        <select class="form-control select2-show-search  border-bottom-0 filter-select"
                                            id="select-capacity" data-placeholder="Capacity" onchange="capacityoption()">
                                            <option>Capacity</option>


                                        </select>
                                    </div>


                                    <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg mb-0" >
                                        <select class="form-control select2-show-search  border-bottom-0 filter-select"
                                            id="select-price" data-placeholder="Price" onchange="priceoption()">
                                            <option>Price</option>

                                           


                                        </select>
                                    </div>

                                    <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg mb-0">
                                        <select class="form-control select2-show-search  border-bottom-0 filter-select"
                                            id="select-country" data-placeholder="County" onchange="countryoption()">
                                            <option>County</option>
                                            <option value="0">All</option>


                                        </select>
                                    </div>

                                    <div class="form-group col-xl-2 col-lg-2 col-md-12 select2-lg mb-0">
                                        <select class="form-control select2-show-search  border-bottom-0 filter-select"
                                            id="select-type" data-placeholder="Type">
                                            <option>Type</option>
                                            <option value="0">All</option>


                                        </select>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-12 mb-0">
                                        <a href="javascript:void(0)"
                                            class="btn btn-lg btn-block btn-secondary filter-btn"><i
                                                class="fa fa-search text-white"></i> Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /header-text -->
        </div>
    </section>
@endsection

@push('js')
    <script src="{{ asset('frontend/js/homejs.js') }}"></script>
@endpush
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


