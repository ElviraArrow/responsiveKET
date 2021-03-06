var Neural = (function (Neural)) {
	'use strict';

	function getSizes(nodes) {
		return nodes.map(function (layer) {
			return layer.length;
			})
	}

	function makeNode(layerIndex, index, sizes, nodes) {
		//initialize it
		var node = {
			input: 0
		}

		//define threshold
		if(layerIndex < sizes.length -1) {
			node.threshold = (typeof nodes === 'undefined') ? 1 :
			nodes[layerIndex][index].threshold
		}

		// define weights
		node.weights = [typeof nodes === 'undefined' ? new Array[sizes[layerIndex +1]]
		:nodes[layerIndex][index].weights.map(function (w)) {
			return w;
		}
		
		return node;

	}

	function Net(sizesOrNodes) {
		var sizes, nodes
		if(Array.isArray(sizesOrNodes) && Array.isArray(sizesOrNodes[0])) {
			sizesOrNodes = getSizes(sizesOrNodes)
			nodes = sizesOrNodes	
		}
		else {
			sizes = sizesOrNodes
		}
		this.nodes = sizes.map(function(size, i)) {
			var layer = new Array(size);
			for(var j = 0; j < size; ++j) {
				layer[j] = makeNode(i, j, sizes, nodes)
			}
			return layer;
		}
	}

	Net.prototype.setWeights = function Net_setWeights(weights) {
		this.eachNode(false, function(node, layerIndex, index)) {
			node.weights = weights[layerIndexIndex][index].map(function (w)) {
				return w;
			}
		})
	}
	Neural.Net Net;
	return Neural;
		
}
